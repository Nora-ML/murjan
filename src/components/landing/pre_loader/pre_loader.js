import React, { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ProductContext } from "../../../context/productContext";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./pre_loader.scss";

gsap.registerPlugin(ScrollTrigger);

const PreLoader = () => {
	const { done } = useContext(ProductContext);
	const text = "Murjan";
	const array = [];

	const rootz = useRef();
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " ") {
			array.push("&nbsp;");
		} else {
			array.push([text[i]]);
		}
	}

	useEffect(() => {
		let ctx = gsap.context(() => {
			// Logo animation
			array.forEach((item, i) => {
				gsap.to(`.char${i}`, {
					translateY: "0px",
					ease: "power3.inOut",
					delay: i * 0.2,
				});
			});
			//reveal text animation
			gsap.fromTo(
				".text",
				{ clipPath: "inset(0% 0% 100% 0%)" },
				{ clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }
			);
			// Container Transition out animation

			/* gsap.fromTo(
				rootz.current,
				{
					yPercent: 0,
				},
				{
					yPercent: -100,
					duration: 1.5,
					delay: done === true,
				},
				">"
			); */
		}, rootz);

		return () => ctx.revert();
	}, []);
	useEffect(() => {
		// Container Transition out animation
		let ctx = gsap.context(() => {
			if (done === true) {
				gsap.fromTo(
					rootz.current,
					{
						yPercent: 0,
					},
					{
						yPercent: -100,
						duration: 1.5,
					},
					">"
				);
			}
		}, rootz);

		return () => ctx.revert();
	}, [done]);

	return (
		<>
			<div ref={rootz} className="text-container">
				<div className="text">
					{array.map((item, i) => (
						<h1 key={`letter${i}`} className={`char${i}`}>
							{item === "&nbsp;" ? <h1>&nbsp;</h1> : item}{" "}
						</h1>
					))}
				</div>
			</div>
		</>
	);
};
export default PreLoader;
