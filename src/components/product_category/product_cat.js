import React, {useRef,useEffect} from "react";
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import { Parallax, ParallaxLayer } from "../../parallax";
import "./product_cat.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const imageArray = [image1, image2, image3,image3];

const ProductCat = () => {
	const test = () => {
		console.log("Product category  WORKING");

	}

	const mainRef = useRef(null);
	const allRefs = useRef([]);
	/* const firstRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null); */


	allRefs.current = [];


	useEffect(() => {

		/* gsap.fromTo(mainRef.current, {
			y: "-100vh",
		}, {
			delay: 0,
			y: "0vh",
			ease: "none",
		}) */
		
		allRefs.current.forEach((el, index) => {
			gsap.fromTo(el, {
				//autoAlpha: 0,
				scale:0.5,
				y: "-100vh",
			}, {
				//autoAlpha: 1,
				delay: index/3,
				scale:1-index/12,	
				y: index === 0
					? "10vh" : index === 1
						? "5vh" : index === 2
							? "0vh" : "-5vh",
				
				scrollTrigger: {
					id: `${index}`,
					trigger: el,
					start:"+200% 10%",
					toggleActions: 'play play none reverse',
					markers: true,
				},



			})
				
		})
		console.log(mainRef.current)

	}, [])


	
	const addToRef = (el) => {
		console.log("addToREf function :",el)
		if (el && !allRefs.current.includes(el)) {
			allRefs.current.push(el);
		}
	}

	return (
/* 		<div ref={mainRef} className="productCat_container">
			{/* <div  className="the_cats"> 
 */
 <>
			{imageArray.map((element, index) => {
			return(
				<div key={index} 
					ref={addToRef}
					className={`product_types ${"image"+index}`}
					style={{
						backgroundImage: `url(${element})`,
					}}
				></div>
			)
		})}

				{/* <div
					ref={firstRef}
					className="product_types first"
					style={{
						backgroundImage: `url(${image3})`,
					}}
				></div>
				<div ref={secondRef}
					className="product_types second"
					style={{
						backgroundImage: `url(${image3})`,
					}}
				></div>
				<div ref={thirdRef}
					className="product_types third"
					style={{ backgroundImage: `url(${image3})` }}
				></div> */}
			{/* </div> */}
			</>
	);
};
export default ProductCat;
