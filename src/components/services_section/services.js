import React from "react";
import { Parallax, ParallaxLayer } from "../../parallax";
import "./services.scss";

const Services = () => {
	console.log("Services page");

	const test = () => {
		console.log("Services  WORKING");
	}

	return (
		<>
			<ParallaxLayer
				className="services_items-parallax one"
				offset={1.6}
				speed={0.70}
				factor={0.25}
			>
				<div className="services_items" onClick={test}> Complimentery Shipping</div>
			</ParallaxLayer>
			<ParallaxLayer
				className="services_items-parallax two"
				offset={1.75}
				speed={0.62}
				factor={0.25}
			>
				<div className="services_items" onClick={test}> Gift Wrapping</div>
			</ParallaxLayer>
			<ParallaxLayer
				className="services_items-parallax three"
				offset={1.55}
				speed={0.75}
				factor={0.25}
			>
				<div className="services_items" onClick={test}> Easy returns and refunds</div>
			</ParallaxLayer>
			</>
	);
};

export default Services;
