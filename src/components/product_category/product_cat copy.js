import React, {useRef,useEffect} from "react";
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import { Parallax, ParallaxLayer } from "../../parallax";
import "./product_cat.scss";


const ProductCat = () => {
	const test = () => {
		console.log("Product category  WORKING");

	}

	return (
		
			<ParallaxLayer offset={0} factor={1}
				className="the_cats">
				<ParallaxLayer
					speed={-0.8}
					offset={0}
					factor={0.55}
					onClick={test}
					className="product_types"
					style={{
						backgroundImage: `url(${image3})`,
					}}
				></ParallaxLayer>
				<ParallaxLayer
					speed={-1.6}
					offset={0.2}
					factor={0.55}
					onClick={test}
					className="product_types"
					style={{
						backgroundImage: `url(${image3})`,
					}}
				></ParallaxLayer>
				<ParallaxLayer
					speed={-3.8}
					onClick={test}
					offset={0.4}
					factor={0.55}
					className="product_types"
					style={{ backgroundImage: `url(${image3})` }}
				></ParallaxLayer>
			</ParallaxLayer>
	);
};
export default ProductCat;
