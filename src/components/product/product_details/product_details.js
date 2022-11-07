import React, { useEffect,useState} from "react";
import DropDown from "../../dropdown/dropdown.js"
import ProductOrder from "../product_order/product_order.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_details.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {

    const [state, setState] = useState(false);

   
    useEffect(() => {
			console.log("useeffect productDetails state,", state);

			if (state === true) {
				gsap.fromTo(
					".product_details_container",
					{
						clipPath: "inset(0% 0% 0% 0%)",
					},
					{
						clipPath: "inset(0% 0% 0% 90%)",
						duration: 0.5,
					}
				);
				ScrollTrigger.batch(".product_details_container", {
					onEnter: (batch) => {
						batch.forEach((ele, index) => {
							gsap.to(ele.children, {
								xPercent: 15,
								duration: 0.9,
								delay: `${0.3 * index}`,
								stagger: 0.1,
								opacity: 0,
							});
						});
					},
				});
			}
			if (state === false) {
				gsap.fromTo(
					".product_details_container",
					{
						opacity: 0,
						clipPath: "inset(0% 100% 0% 0%)",
					},
					{
						clipPath: "inset(0% 0% 0% 0%)",
						duration: 0.5,
						opacity: 1,
						delay: 0.5,
					}
				);
				ScrollTrigger.batch(".product_details_container", {
					onEnter: (batch) => {
						batch.forEach((ele, index) => {
							gsap.fromTo(
								ele.children,
								{ yPercent: -15, xPercent: -15, opacity: 0 },
								{
									yPercent: 0,
									xPercent: -2,
									stagger: 0.1,
									duration: 0.9,
									delay: `${0.3 * index}`,
									opacity: 1,
								}
							);
						});
					},
				});
			}
		}, [state]);

		const productDetails = () => {
			return (
				<>
					{state && (
						<div className="close" onClick={() => setState(!state)}>
							X
						</div>
					)}
					<div className="product_details_container">
						<div className="product_details product_details-collection_name">
							<p className="collection-name">Blossom CollectionBy Tjep.</p>
						</div>
						<div className="product_details product_details-item-name">
							<h1 className="item-name">Ring Regular</h1>
						</div>

						<div className="product_details product_details-options">
							<DropDown />
							<DropDown />
						</div>

						<div className="product_details product_details-action">
							<div className="action-box" onClick={() => setState(!state)}>
								<p className="action">$ 2955 - Order</p>
							</div>
							<div className="action-box">
								<p className="action">Personalize</p>
							</div>
						</div>
						<div className="product_details product_details-details">
							<div className="product-details-control">
								<p className="control">Description</p>
								<p className="control">Product Details</p>
								<p className="control">Size Chart</p>
							</div>
							<div className="product-details-paragraph">
								<p className="details">
									This beautifully crafted 18k rose gold choker is designed like
									a stem of a flower elegantly wrapping around your neck.
									Showcasing delicate details like the heart shaped ending this
									choker celebrates modern femininity.
								</p>
							</div>
						</div>
					</div>
				</>
			);
		};
    return (
             <>
                {productDetails()}
                <ProductOrder expand={state} />
            </>
    )
}
export default ProductDetails;