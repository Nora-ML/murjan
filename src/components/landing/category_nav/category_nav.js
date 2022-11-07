import React, { useRef, useLayoutEffect, useContext } from "react";
import image from "../../../images/bangle_1(1).png";
import image1 from "../../../images/earing_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";
import image5 from "../../../images/ring_1(1).png";
import image6 from "../../../images/ring_2(1).png";
import goldEdge from "../../../images/icons/gold-edge-flower6.png";

import { ProductContext } from "../../../context/productContext";
import "./category_nav.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CategoryNav = () => {
	const app = useRef();
	const { featured } = useContext(ProductContext);
	const arrayImages = [image, image1, image2, image3, image4, image5, image6];

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const section = gsap.utils.toArray(".category_each-container");

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".second_container",
					scrub: 0.5,
					ease: "none",
					snap: {
						snapTo: 1 / (section.length - 1),
						duration: 1,
						delay: 1,
						//directional: false,
					},
					/* markers: {
						startColor: "green",
						endColor: "green",
						fontSize: "16px",
						fontWeight: "bold",
						indent: 10,
					}, */
					start: `top top+=30%`,
					end: `top+=400% bottom-=20%`,
				},
			});
			tl.to(section, {
				xPercent: -100 * (section.length - 1),
				ease: "none",
			});

			ScrollTrigger.refresh();
		}, app);

		return () => ctx.revert();
	});
	/// Headers animation

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			// all your animations go in here...

			const arr = gsap.utils.toArray(".cat_header");
			const windowInner = document
				.querySelectorAll(".category_each-container")[0]
				.getBoundingClientRect().height;
			//const windowInner = window.innerHeight;

			const tl = gsap.timeline({});

			arr.forEach((r, index) => {
				tl.fromTo(
					r,
					{ xPercent: `${100 + index * 100}`, opacity: 0 },
					{
						scrollTrigger: {
							trigger: r,
							/* markers: {
								startColor: "purple",
								endColor: "purple",
								fontSize: "16px",
								fontWeight: "bold",
								indent: -10,
							}, */
							ease: "none",
							start: `top+=${index * windowInner} top+=30%`,
							end: `top+=${windowInner + index * windowInner} ${
								index === 0 ? "top" : "top"
							}`,
							//toggleActions: "play play play reset",
							onEnter: () => {
								gsap.fromTo(
									r,
									{ xPercent: `${100 + index * 100}`, opacity: 0 },
									{
										//border: "2px red solid",
										xPercent: 0,
										opacity: 1,
										//delay: `${index * 0.2}`,
									}
								);
							},
							onLeave: () => {
								gsap.to(r, {
									// border: "2px green solid",
									xPercent: -100,
									//delay: -0.2,
								});
							},
							onEnterBack: () => {
								gsap.fromTo(
									r,
									{ xPercent: `${index * 100}` },
									{
										//border: "2px red solid",
										xPercent: 0,
										//delay:`${index * 0.2}`,
									}
								);
							},
							onLeaveBack: () => {
								gsap.to(r, {
									xPercent: -100,
								});
							},
						},
					}
				);
			});
		}, app); // <- scopes all selector text to the root element

		return () => ctx.revert();
	}, []);

	return (
		<div ref={app} className="category_main_container">
			<div className="cat_container">
				{/* <img
					className="decoration_image"
					src={goldEdge}
					alt="page decoration gold flower"
				/> */}
				{/* <div className="fixed_header_part">
					
				</div> */}
				<div className="cat_headers_container">
					<h1 className="cat_header_fixed">Trending</h1>
					<div className="cat_wrap">
						{featured &&
							Object.entries(featured).map(([key, value], index) => (
								<h1 key={value.id + key} className="cat_header">
									{key}
								</h1>
							))}
					</div>
				</div>
				<div className="second_container">
					{featured &&
						Object.entries(featured).map(([key, value], index) => (
							<div
								key={value.id + key + "" + index}
								className="category_each-container "
							>
								<div className="cat_images">
									{value.map((e, index) => (
										<div key={index} className="cat_image_each">
											<img
												//src={e.images[0]}
												src={arrayImages[Math.floor(Math.random() * 6)]}
												alt=""
											/>
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default CategoryNav;
