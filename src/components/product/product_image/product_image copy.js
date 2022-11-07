import React, { useEffect} from "react";
import image1 from "../../../images/earing_1(1).png";
import image from "../../../images/bangle_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_image.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductImages = () => {

    useEffect(() => {
			console.log("useEffect product_image");

			var tl = gsap.timeline({
				repeat: 0,
				repeatDelay: -0.5,
			});
			tl.fromTo(
				".image_wrapper",
				{
					clipPath: "inset(0% 100% 0% 0%)",
					scale: 1.3,
					duration: 2,
					delay: 1,
					yPercent: -20,
				},
				{
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 2,
					scale: 1,
					ease: "power2.out",
					stagger: 2.5,
					yPercent: 0,
					delay: 1,
				}
			);

			/*       ScrollTrigger.create({
           
            trigger: ".image_wrapper",
            //toggleActions: "play pause play play",
            markers: true,
            start: "top-=10% top",
            end:"bottom bottom-=20%",
            onEnter: () => {  
                     
       
        }); */

			/*  tl.to(".shop_item-img",{
            scrollTrigger: {
                trigger: ".image_wrapper",
                pin: ".image_wrapper",
                pinReparent:true,
                //toggleActions: "play pause play play",
               // markers: true,
                start: "center-=10% top",
                end: "bottom center",
                preventOverlaps:true,
            },
        }); */
			/*         const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".image_wrapper",
                pin: ".shop_item-img",
                pinReparent:true,
                //toggleActions: "play pause play play",
               // markers: true,
                start: "center-=10% top",
                end: "bottom center",
                preventOverlaps:true,
            },
        }); */

			/*        ScrollTrigger.create({
                trigger: ".image_wrapper",
                //markers: true,
                start: "center-=20% top",
                end:"bottom+=20% bottom+=10%",
               // toggleActions:"play play none reverse",
                onEnter: () => {
                    tl.pause(0);
                    tl2.to(".shop_item-img", {
                        border:"green solid 1px",
                        yPercent: -30,
                        duration:5,
                        ease: "slow(0.7, 0.7, false)",
                        scale:1.3,
                    })
                },
                onEnterBack: () => {
                    tl.play();
                    tl2.to(".shop_item-img", {
                        border:"1px double black",
                        yPercent: -40,
                        duration:5,
                        ease: "power2.in",
                        scale:1,
                    })
                },
                onLeaveBack: () => {
                    tl.play();
                    tl2.to(".shop_item-img", {
                        border:"1px double black",
                        yPercent: -40,
                        duration:5,
                        ease: "power2.in",
                        scale:1,
                    })
                },

            })*/
		}, []);

		return (
			<div
				className="product_image_container" /* style={{backgroundImage:`url(${image3})`}} */
			>
				<div className="image_wrapper_default">
					<img className="shop_item-img" src={image3} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image1} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image2} alt="" />
				</div>
				<div className="image_wrapper">
					<img className="shop_item-img" src={image3} alt="" />
				</div>
			</div>
		);
}
export default ProductImages;