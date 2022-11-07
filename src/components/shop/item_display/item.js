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
		const state = Flip.getState(`.id_${id}_wrapper`);

		/* gsap.set(`.id_${id}`, {
			zIndex: 12,
			width: "55vw",
			height: "100vh",
			position: "relative",
		}); */
		gsap.set(`.id_${id}_wrapper`, {
			zIndex: 11,
			absolute: true,
			border: "green 1px solid",
		});
		gsap.set(".target", {
			zIndex: 10,
			//autoAlpha: 1,
		});

		const tl = gsap.timeline({});

		Flip.fit(state, ".target", {
			//fitChild: `.id_${id}_img`,
			//scale: true,
			//width: "55%",
			//height: "100%",
			absolute: true,
			duration: 3,
			onEnter: () => {
				tl.to(`.id_${id}_img`, {
					//border: "red 1px solid",
					opacity: 0.5,
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
			onLeave: () => {
				tl.to(
					`.id_${id}_img`,
					{
						//backgroundColor: "white",
						delay: 1.7,
						scale: 1.2,
					},
					0
				);
				tl.to(
					`.id_${id}_wrapper`,
					{
						backgroundColor: "#f3eaddcb",
						delay: 1.8,
					},
					0
				);
			},
			ease: "power3.inOut",
		});

		setTimeout(() => {
			navigate("/product");
		}, 2100);
	};

	return (
		<>
			<div className="target">
				<div className="target_item-img"></div>
			</div>
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
