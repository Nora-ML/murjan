import React,{useRef,useEffect} from "react";
import Nav from "../navigation/Navigation";
import Hero from "./hero/hero";
import CatHeaders from "./cat_headers/cat_headers";
import CatImages from "./cat_images/cat_images";
import GemImage from "./gem_type_image/gem_type_image.js"
import GemHeader from "./gem_type_header/gem_type_header.js"

import Services from "../services_section/services";
import ProductCat from "../product_category/product_cat";
import CategoryNav from "../category_nav/category_nav";

import { Parallax, ParallaxLayer } from "../../parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./landing.scss";

gsap.registerPlugin(ScrollTrigger);


const Landing = () => {
	console.log("Landing page");



	return (
		<div className="landing_container special_blush">
				<Nav/>
				<Hero />
				<div className="gems">
					<GemImage />
					<GemHeader/>
				</div>
				<CategoryNav/>

			
			<div className="content-2">
  				<p className="content__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dicta voluptas ut aperiam harum ratione, doloremque molestias cumque nemo enim nihil delectus aliquam quibusdam voluptate quae rem nobis repellat. Commodi.
  				A tempore quibusdam voluptatem distinctio excepturi, soluta doloremque laborum consequuntur possimus magnam officia dicta, fugit quam voluptas modi voluptatibus autem assumenda quae animi. Eius labore architecto excepturi expedita ea nulla.</p>
			</div>
			{/* <Hero /> */}
			{/* <Nav /> */}

			{/* <Hero /> */}

			{/* <Services />
	
			<div className="categories_container">
				<CatHeaders />
				<CatImages />
			</div> */}
		</div>
	);
};

export default Landing;
