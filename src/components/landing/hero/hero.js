import React,{useEffect,useRef} from "react";
import myVideo from "../../../images/videos/graff2.mp4";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./hero.scss";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

	const heroRefs = useRef(null);

	useEffect(() => {
		console.log(heroRefs)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger:heroRefs.current,
				pin: true,
				start: 'top top',
				end: 'bottom-=100 top+=100',
				//markers: true,
				pinSpacing: false,
				toggleActions:"play play none reverse", 
				scrub:true,
			}
		})

		tl.from(heroRefs.current, {
			scale:1,
		})
		tl.to(heroRefs.current, {
			yPercent: -100,
			scale:1.2,
			ease:"none",
			duration: 1,
		})
	}, [])

	return (
		<div ref={heroRefs}  className="hero_container special_blush">
			{/* <div className="hero_logo">
				<h1>This is LOGO</h1>
			</div> */}
			<video  src={myVideo} type="video/mp4" className="hero_video" /* autoPlay loop muted */ />
			{/* <div className="hero_subheaders">
				<h1>This is Header 1</h1>
				<h3>Subheader 1</h3>
			</div> */}
		</div>
	);
};
export default Hero;
