import React, {useRef,useEffect} from "react";
import image1 from "../../images/image1.webp";
import image2 from "../../images/image2.webp";
import image3 from "../../images/image3.webp";
import image4 from "../../images/IMG_6346_1500x.webp";
import { Parallax, ParallaxLayer } from "../../parallax";
import "./product_cat.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const imageArray = [image1, image2, image3,image4];

const ProductCat = () => {

	const mainRef = useRef(null);
	const allRefs = useRef([]);
	allRefs.current = [];


	useEffect(() => {


		const first = gsap.timeline({})

		allRefs.current.forEach((el, index) => {
			first
				.from(el, {
					duration: 0.4,
    				z: 0.001,
    				y: "-100vh",
    				ease: "none",
				},0)
				
		})

		const second = gsap.timeline({
			immediateRender: false,
    		overwrite: 'auto',
    		scrollTrigger: {
    		  id: 'trigger',
    		  trigger: 'body',
    		  start: 'top',
    		  end: '+=500',
			  markers: true,
			  pin:true,
    		  scrub: 2,
				snap: 2 / 30,
    		}
		})
		allRefs.current.forEach((el, index) => {
			console.log("e", el.offsetTop);
			let newY =Math.abs( (el.offsetTop)+50);
			console.log("newY",newY)
			second
				.to(el, {
					duration: 0.1,
					y: "50vh",
					scale:1-index/8,
					ease: "none",
					repeat:2,
				},4)
				.to(el, {
					duration: 0.5,
					y: `${newY}vh`,
					scale:1-index/8,
					ease: "none",
					repeat:2,
				},3)
				.to(el, {
					duration: 0.5,
					y: `${newY}vh`,
					scale:1-index/8,
    				ease: "none",
				},2)
				.to(el, {
					duration: 0.5,
					y: `${newY}vh`,
					scale:1-index/8,
    				ease: "none",
				},1)
				
		})

		
	}, []);

	const addToRef = (el) => {
		console.log("addToREf function :", el);
		if (el && !allRefs.current.includes(el)) {
			allRefs.current.push(el);
		}
	};

	return (
		<div className="productCat_container">
			{imageArray.map((element, index) => {
				return (
					<div
						key={index}
						ref={addToRef}
						className={`product_types ${"image" + index}`}
						style={{
							backgroundImage: `url(${element})`,
						}}
					></div>
				);
			})}
		</div>
	);
};
export default ProductCat;
