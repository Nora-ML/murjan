import React,{useRef,useEffect} from "react";
import Nav from "../navigation/Navigation";
import Hero from "../hero/hero";
import Services from "../services_section/services";
import ProductCat from "../product_category/product_cat";
import CatHeaders from "../cat_headers/cat_headers";
import CatImages from "../cat_images/cat_images";
import { Parallax, ParallaxLayer } from "../../parallax";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./landing.scss";

gsap.registerPlugin(ScrollTrigger);


const Landing = () => {
	console.log("Landing page");

	return (
		<div className="landing_container ">
			<Nav />

			{/* <Hero /> */}
	
			<ProductCat />

			{/* <Services />
	
			<div className="categories_container">
				<CatHeaders />
				<CatImages />
			</div> */}
			

		</div>
	);
};

export default Landing;
