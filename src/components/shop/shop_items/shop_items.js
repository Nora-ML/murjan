import React, { useEffect, useContext, useState, useLayoutEffect } from "react";

import Item from "../item_display/item";
import { ProductContext } from "../../../context/productContext.js";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./shop_items.scss";

// first page items has been saved in localstorage during initialload
// 1- retrieve first batch from local storage and display
// 2- then fetch second page and save it in localstorage ready to be called
// 3- pagination on large screen
// 4- infinite scroll on small window

gsap.registerPlugin(ScrollTrigger);

const ShopItems = () => {
	// this will change on page navigation
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState();
	const [numberOfPages, setNumberOfPages] = useState();
	const [skip, setSkip] = useState(0);
	// retrieve first batch from localStorage
	// save total items number in state
	// runs on each page change
	useLayoutEffect(() => {
		console.log("retrieving from localstorage, page:", page, "skip:", skip);
		if (window !== undefined) {
			console.log(JSON.parse(localStorage.getItem(`all/page_${page}`)));
			const { total, products } = JSON.parse(
				localStorage.getItem(`all/page_${page}`)
			);
			setNumberOfPages(Math.ceil(total / 15));
			setProducts(products);
		}
	}, [page]);

	const fliptoToPage = (n) => {
		window.scrollTo(0, 0);
		// in case the user jumped a page (or a few ) we will have to fetch data straight from the API
		// we will also want to make a loading page till response is complete
		const newBatch = localStorage.getItem(`all/page_${n}`);

		if (!newBatch) {
			console.log("user Jumped pages", newBatch);
			// calculate skip
			let newSkip = n * 15 - 15;

			(async () => {
				const response = await fetch(
					`https://dummyjson.com/products?skip=${newSkip}&limit=15`
				);

				return await response.json();
			})().then((response) => {
				if (window !== undefined) {
					setSkip(newSkip);
					// to fire the call from localStorage request
					setPage(n);

					return localStorage.setItem(
						`all/page_${n}`,
						JSON.stringify(response)
					);
				}
			});
		} else {
			console.log("user following sequence page-", n);
			setPage(n);
		}
	};

	// animation
	useEffect(() => {
		console.log("animation shop_items");

		gsap.set(".image_wrapper", { yPercent: -10 });

		ScrollTrigger.batch(
			".image_wrapper",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ yPercent: 10 },
							{
								scrollTrigger: {
									trigger: item,
									// markers: true,
									start: "center-=10 bottom",
									end: "bottom bottom",
									toggleActions: "play play none reset",
								},
								yPercent: 0,
								duration: 0.9,
								ease: "none",
								delay: `${0.3 * index}`,
								opacity: 1,
								stagger: 0.2,
							}
						);
					});
				},
				once: true,
			},
			0
		);
		ScrollTrigger.batch(
			".shop_item-img",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ scale: 1.2, yPercent: -10 },
							{
								scrollTrigger: {
									trigger: item,
									//markers: true,
									start: "center-=10 bottom",
									end: "bottom bottom",
									toggleActions: "play play none reset",
								},
								scale: 0.9,
								duration: 0.5,
								yPercent: 10,
								opacity: 1,
								ease: "none",
								delay: `${0.3 * index}`,
								stagger: 0.3,
							}
						);
					});
				},
				once: true,
			},
			"-=25%"
		);
		ScrollTrigger.batch(
			".shop_item-details",
			{
				onEnter: (batch) => {
					batch.forEach((item, index) => {
						gsap.fromTo(
							item,
							{ yPercent: 20 },
							{
								scrollTrigger: {
									trigger: item,
									//markers: true,
									start: "bottom+=30 bottom",
									end: "bottom+=30 bottom",
									toggleActions: "play play none reset",
								},
								yPercent: 0,
								duration: 0.5,
								ease: "none",
								delay: `${0.3 * index}`,
								opacity: 1,
								stagger: 0.4,
							}
						);
					});
				},
				once: true,
			},
			"-=25%"
		);
	});
	// runs on pageload to fetch and save next batch of product in localStorage
	useEffect(() => {
		console.log("Sequence request");
		// check if the next Page has already been called and saved in localstorage
		const newBatch = localStorage.getItem(`all/page_${page + 1}`);

		// if not saved fetch and save it in local storage
		if (!newBatch && numberOfPages >= page + 1) {
			console.log("Pre -fetching data ");
			let newSkip = skip + 15;
			let newPage = page + 1;
			setTimeout(() => {
				(async () => {
					const response = await fetch(
						`https://dummyjson.com/products?skip=${newSkip}&limit=15`
					);

					return await response.json();
				})().then((response) => {
					if (window !== undefined) {
						setSkip(newSkip);
						return localStorage.setItem(
							`all/page_${newPage}`,
							JSON.stringify(response)
						);
					}
				});
			}, 3000);
		}
	}, [page]);

	const smallWindow = () => {
		console.log(products);
		if (products && window.innerWidth < 770) {
			return (
				<div className="shop_items">
					{products.map((pro) => {
						
						return <Item size={""} product={pro} />;
					})}
				</div>
			);
		}
	};
	const largeWindow = () => {
		const newArray = [...new Array(numberOfPages)];
		console.log(newArray);

		if (products && window.innerWidth > 770) {
			let first = [];
			let second = [];
			let third = [];
			let fourth = [];
			let fifth = [];

			for (let i = 0; i < 3; i++) {
				if (products[i]) {
					first.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}
			for (let i = 3; i < 6; i++) {
				if (products[i]) {
					second.push(
						i === 5 ? (
							<Item
								key={i}
								size={"large"}
								loc={`_${i}`}
								product={products[i]}
							/>
						) : (
							<Item key={i} size={""} loc={`_${i}`} product={products[i]} />
						)
					);
				}
			}
			for (let i = 6; i < 9; i++) {
				if (products[i]) {
					third.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}
			for (let i = 9; i < 12; i++) {
				if (products[i]) {
					fourth.push(
						i === 9 ? (
							<Item
								key={i}
								size={"large"}
								loc={`_${i}`}
								product={products[i]}
							/>
						) : (
							<Item key={i} size={""} loc={`_${i}`} product={products[i]} />
						)
					);
				}
			}
			for (let i = 12; i < 15; i++) {
				if (products[i]) {
					fifth.push(<Item key={i} size={""} loc="" product={products[i]} />);
				}
			}

			return (
				<div className="shop_large_container">
					<div className="shopItems">
						<div className="shopItems_1">{first}</div>
						<div className="shopItems_2">{second}</div>
						<div className="shopItems_3">{third}</div>
						<div className="shopItems_4">{fourth}</div>
						<div className="shopItems_5">{fifth}</div>
					</div>
					
				</div>
			);
		}
	};

	console.log("skip", skip);
	console.log("page", page);
	return (
		<>
			{smallWindow()}
			{largeWindow()}
			<div className="pagination">
						{[...new Array(numberOfPages)].map((e, index) => (
							<p
								key={`pageNumber_${index}`}
								className={`page_number page_number${
									index + 1 === page ? "-active" : ""
								}`}
								onClick={() => fliptoToPage(index + 1)}
							>
								{index + 1}
							</p>
						))}
					</div>
		</>
	);
};
export default ShopItems;
