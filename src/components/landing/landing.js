import React, { useEffect, useContext } from "react";
import Nav from "../navigation/Navigation";
import Hero from "./hero/hero";
import PostHero from "./post_hero/post_hero";
import GemColor from "./gem_color/gem_color";
import CategoryNav from "./category_nav/category_nav";
import Collection from "./collection/collection";
import PreLoader from "./pre_loader/pre_loader";
import { ProductContext } from "../../context/productContext";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./landing.scss";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
	const { done } = useContext(ProductContext);

	//const [load, setLoad] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
		/* if (done && !load) {
			
		} */
	}, [done]);

	useEffect(() => {
		if (done) {
			const script = document.createElement("script");

			script.src = "loco.js";
			script.async = true;

			document.body.appendChild(script);
			//setFinal(true);
			return () => {
				document.body.removeChild(script);
			};
		}
	}, [done]);

	return (
		<>
			<PreLoader />
			<main className="main_container">
				{done && (
					<div className="landing_container">
						<Nav classN="trans" />
						<Hero />
						<PostHero />
						<GemColor />
						<CategoryNav />
						<Collection />

						<div className="content-2">
							<p className="content__text">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Suscipit dicta voluptas ut aperiam harum ratione, doloremque
								molestias cumque nemo enim nihil delectus aliquam quibusdam
								voluptate quae rem nobis repellat. Commodi. A tempore quibusdam
								voluptatem distinctio excepturi, soluta doloremque laborum
								consequuntur possimus magnam officia dicta, fugit quam voluptas
								modi voluptatibus autem assumenda quae animi. Eius labore
								architecto excepturi expedita ea nulla.
							</p>
						</div>
					</div>
				)}
			</main>
		</>
	);
};

export default Landing;
