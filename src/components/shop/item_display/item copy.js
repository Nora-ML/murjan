import React, { useEffect, useRef, useState } from "react";
import image from "../../../images/bangle_1(1).png";
import image1 from "../../../images/earing_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";
import image5 from "../../../images/ring_1(1).png";
import image6 from "../../../images/ring_2(1).png";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./item.scss";
// item display requirment
// 1- appear on scroll (one by one)
// 2- container moves up slightly
// 3- inner image zooms out slightly
// 4- item details slide in after the image  (one by one)

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

const Item = ({ size, product, loc }) => {
	//console.log("Item Component");
	const arrayImages = [image, image1, image2, image3, image4, image5, image6];
	const { title, price, images, id } = product;
	const [active, setActive] = useState(false);
	const main = useRef();
	const navigate = useNavigate();

	const transitionAnim = () => {
		console.log("transitionAnimation id", id, "e");
		setActive(true);
		const state = Flip.getState(`.id_${id}`);

		gsap.set(`.id_${id}`, {
			zIndex: 11,
			position: "relative",
		});

		/*gsap.set(`.id_${id} .image_wrapper`, {
			width: "55vw",
			height: "100vh",
			absolute: true,
		});
		gsap.set(`.id_${id} .shop_item-img`, {
			width: 80,
			height: 80,
			objectFit: "contain",
		}); */

		const tl = gsap.timeline({});

		Flip.fit(state, ".target", {
			fitChild: `.id_${id} .image_wrapper`,
			scale: true,
			//width: 55,
			//height: 100,
			absolute: true,
			duration: 3,
			onEnter: () => {
				tl.to(`.id_${id} .shop_item-img`, {
					border: "red 1px solid",
					/* width: `${80 * 0.55}%`,
					height: `${80 * 0.55}%`, */
					ease: "power3.inOut",
				}).to(".overlay", {
					zIndex: 10,
					ease: "power3.inOut",
					opacity: 0.8,
					autoAlpha: 1,
				});
			},
			onComplete: () => {
				tl.to(state, { autoAlpha: 0 });
			},
			ease: "power3.inOut",
		});

		setTimeout(() => {
			navigate("/product");
		}, 2500);
	};

	return (
		<>
			<div className="target"></div>
			{active && <div className="overlay"></div>}
			<div className={`shop_item ${size} shop_item${loc} id_${id}`}>
				<Link
					to=""
					onClick={() => transitionAnim()}
					className={`image_wrapper ${size} id_${id}_wrapper`}
				>
					<img
						className={`shop_item-img ${size} id_${id}_img`}
						//src={images[0]}
						src={image3}
						//src={arrayImages[Math.floor(Math.random() * 6)]}
						alt=""
					/>
				</Link>
				<div className={`shop_item-details ${size}`}>
					<p className="shop_item_details-name">{title}</p>
					<p className="shop_item_details-price">{price}</p>
				</div>
			</div>
		</>
	);
};
export default Item;
