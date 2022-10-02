/* import React from "react";
import image1 from "../../../../images/image1.webp";
import image2 from "../../../../images/image2.webp";
import image3 from "../../../images/image3.webp";
import { Parallax, ParallaxLayer } from "../../../parallax";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./cat_headers.scss";

const CatHeaders = () => {

	const test = () => {
		console.log("Card headers WORKING");
	}

	return (
		<>
		<ParallaxLayer offset={0} factor={0.2} className="card_head_frame">
				<ParallaxLayer  className="the_card_head" sticky={{start:1.9,end:3}}  >
					<h1 onClick={test} className="card_header">Trending</h1>			
				</ParallaxLayer>
				<ParallaxLayer  className="the_card_head" sticky={{start:3,end:3.4}} >
					<h1 onClick={test} className="card_header">One of a kind</h1>
					
				</ParallaxLayer>
				<ParallaxLayer  className="the_card_head" sticky={{start:3.4,end:4.4}}>
					<h1 onClick={test} className="card_header">Bespoke</h1>
					
				</ParallaxLayer>
				
			</ParallaxLayer>
			</>
	
	);
};
export default CatHeaders;
 */