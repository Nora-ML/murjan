import React, { useEffect} from "react";
import image1 from "../../../images/earing_1(1).png";
import image from "../../../images/bangle_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_image.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductImages = () => {

    useEffect(() => {
			console.log("useEffect product_image");

			var tl = gsap.timeline({
				repeat: 0,
				repeatDelay: -0.5,
			});
			tl.fromTo(
				".image_wrapper_default .shop_item-img",
				{
					opacity: 0.5,
					scale: 1.3,
				},
				{
					opacity: 1,
					scale: 1,
					duration: 1,
				}
			);
			tl.fromTo(
				".image_wrapper",
				{
					clipPath: "inset(0% 100% 0% 0%)",
					scale: 1.3,
					duration: 2,
					delay: 1,
					yPercent: -20,
				},
				{
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 2,
					scale: 1,
					ease: "power2.out",
					stagger: 2.5,
					yPercent: 0,
					delay: 0,
				}
			);
		}, []);

		return (
			<div
				className="product_image_container" /* style={{backgroundImage:`url(${image3})`}} */
			>
				<div className="image_wrapper_default">
					<img className="shop_item-img" src={image3} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image1} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image2} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image3} alt="" />
				</div>
			</div>
		);
}
export default ProductImages;