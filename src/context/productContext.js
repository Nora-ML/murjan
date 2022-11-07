import { createContext, useLayoutEffect, useEffect, useState } from "react";
//import SHOP_DATA from "../RestAPI/index"

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
	console.log("ProductContext");
	const [featured, setFeatured] = useState();
	const [done, setDone] = useState(false);
	const [final, setFinal] = useState(false);

	const saveLocalStorage = (name, data) => {
		if (window !== undefined) {
			return localStorage.setItem(name, data);
		}
	};

	useLayoutEffect(() => {
		// fetch unfiltered first 15 product
		const newVsold = localStorage.getItem("all/page_1");

		if (!newVsold) {
			(async () => {
				try {
					const response = await fetch(
						"https://dummyjson.com/products?skip=0&limit=15"
					);

					return await response.json();
				} catch (error) {
					console.log("error fetching all products", error);
				}
			})()
				// save in local storage with proper name id
				.then((response) => {
					console.log("ProductContext: first 15 Products");
					saveLocalStorage("all/page_1", JSON.stringify(response));
				});
		}
	}, []);

	useLayoutEffect(() => {
		let featuredProducts = {};
		let catLength;

		// fetch category list names
		// ----------- > HAVE an api endpoint for cat list
		// ----------- > HAVE an api endpoint for items (title, id,images, brand, price category) only
		// ----------- > HAVE an api endpoint for featured Items  (title, id,images, brand, price category) only

		(async () => {
			const response = await fetch("https://dummyjson.com/products/categories");

			return await response.json();
		})()
			// iterate through category names and send an api request for each to get first 15 items
			.then((response) => {
				catLength = response.length;

				response.forEach((cat, index) => {
					const newVsold = localStorage.getItem(`${cat}/page_1`);

					if (!newVsold) {
						console
							.log("Fetching first time NOT in Local Storage")(async () => {
								const response = await fetch(
									`https://dummyjson.com/products/category/${cat}?skip=0&limit=15`
								);

								const res = await response.json();

								return res.products;
							})()
							// save all 15 results in local storage with keyword first page and category name
							// save first 4 in state to be passed to landing page for display in category display section
							.then((response) => {
								//console.log("ProductContext: 15 items of each Cat");

								// saving first 4 cats in the state as featured items for each cat
								let arr = [];
								for (let i = 0; i <= 3; i++) {
									arr.push(response[i]);
								}
								if (index <= 3) {
									featuredProducts[cat] = arr;

									if (index === 3) {
										setDone(true);
										setFeatured(featuredProducts);
									}
								}

								// save all 15 limit items of each cat in local storage
								saveLocalStorage(`${cat}/page_1`, JSON.stringify(response));
							});
					} else {
						if (index <= 3) {
							(async () => {
								// this condition can be removed later when i have a specific endpoint for featured products

								const response = await fetch(
									`https://dummyjson.com/products/category/${cat}?skip=0&limit=4`
								);
								const res = await response.json();
								return { products: res.products, cat: cat, ind: index };
							})().then((response) => {
								//console.log("ProductContext: 4 items of each Cat", response);
								if (response) {
									featuredProducts[response.cat] = response.products;
								}
								if (Object.keys(featuredProducts).length === 4) {
									console.log("Final Step");
									setDone(true);
									setFeatured(featuredProducts);
								}
							});
						}
					}
				});
			});
	}, []);

	return (
		// notice the products is an object within an object? understand later
		<ProductContext.Provider value={{ featured, done }}>
			{children}
		</ProductContext.Provider>
	);
};
export default ProductContextProvider;
