import React from "react";
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import { Parallax, ParallaxLayer } from "../../parallax";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./cat_images.scss";

const CatImages = () => {

	const test = () => {
		console.log("Cart Images WORKING");
	}

	return (
		
			<>
			<ParallaxLayer offset={0.15} factor={0.8} className="card_frame">
				<ParallaxLayer  className="card_image" sticky={{start:1.9,end:3}} factor={0.8}  >
				<div style={{ backgroundImage: `url(${image1})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image2})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image3})` }} onClick={test} className="card_image_item"></div>
				</ParallaxLayer>
				<ParallaxLayer  className="card_image" sticky={{start:3,end:3.4}} factor={0.8}  >
				<div style={{ backgroundImage: `url(${image3})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image1})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image2})` }} onClick={test} className="card_image_item"></div>
				</ParallaxLayer>
				<ParallaxLayer  className="card_image" sticky={{start:3.4,end:5}} factor={0.8} >
				<div style={{ backgroundImage: `url(${image2})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image3})` }} onClick={test} className="card_image_item"></div>
				<div style={{ backgroundImage: `url(${image1})` }} onClick={test} className="card_image_item"></div>
				</ParallaxLayer>
			</ParallaxLayer>
			</>
	
	);
};
export default CatImages;
