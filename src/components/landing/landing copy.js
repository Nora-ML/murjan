import React from "react";
import Nav from "../navigation/Navigation";
import Hero from "../hero/hero";
import Services from "../services_section/services";
import ProductCat from "../product_category/product_cat";
import CatHeaders from "../cat_headers/cat_headers";
import CatImages from "../cat_images/cat_images";
import { Parallax, ParallaxLayer } from "../../parallax";
import "./landing.scss";

const Landing = () => {
	console.log("Landing page");

	return (
		<Parallax pages={6} className="landing_container ">
			<ParallaxLayer
				sticky={{ start: 0, end: 2.8}}
				style={{ width: '80vw', height: "11vh",zIndex:5 }}
			>
				{/* In this case the nav component uses no parallax componenets */}
				<Nav />
		
			</ParallaxLayer>

			<ParallaxLayer
				sticky={{ start: 0, end: 1,zIndex:1 }}
				style={{width:'80vw',height:"100vh"}}
			>
				<Hero />

			</ParallaxLayer>

			<ParallaxLayer
				sticky={{ start: 0, end: 1 }}
				style={{width:'20vw',left: "79vw"}}
			>
				<ProductCat />
			</ParallaxLayer>

			
			<ParallaxLayer offset={2.7} speed={0.4} factor={0.9}  className="service_container">
				<Services />
			</ParallaxLayer>

		
			<ParallaxLayer sticky={{ start:2.8, end: 3.6}}  className="categories_container">
				<CatHeaders />
				<CatImages />
			</ParallaxLayer>
			

		</Parallax>
	);
};

export default Landing;
