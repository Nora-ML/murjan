import React from "react";
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import { Parallax, ParallaxLayer } from "../../parallax";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./hero.scss";

const Hero = () => {

	const test = () => {
		console.log("Hero image  WORKING");
	}

	return (
			<ParallaxLayer
				offset={0.11}
				factor={0.85}
				className="the_frame"
			>
				<ParallaxLayer
					speed={0}
					offset={0}
					className="hero_main_media"
					onClick={test}
					factor={0.85}
					style={{ backgroundImage: `url(${image2})` }}
				></ParallaxLayer>
				<ParallaxLayer
					speed={5}
					offset={1}
					factor={0.85}
					className="hero_main_media"
					onClick={test}
					style={{ backgroundImage: `url(${image1})` }}
				></ParallaxLayer>
				<ParallaxLayer
					speed={5}
					offset={2}
					factor={0.85}
					className="hero_main_media"
					onClick={test}
					style={{ backgroundImage: `url(${image3})` }}
				></ParallaxLayer>
			</ParallaxLayer>
	);
};
export default Hero;
