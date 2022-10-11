import React,{useRef,useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../../../images/bangle_1(1).png";
import image1 from "../../../images/earing_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";
import "./gem_type_image.scss"
gsap.registerPlugin(ScrollTrigger);


const GemImage = () => {
    const allRef = useRef([]);
    allRef.current=[]
    let parentImage="" ;

    const addToRef = (el) => {

        if (!el) return "";

        const theChildren = Object.keys(el.children);

        theChildren.forEach(child => {

            let data = el.children[child];
       
            if (data && !allRef.current.includes(data)){
                allRef.current.push(data)
            }
            if (parentImage==="") {
                console.log("Adding parentImage,",{el})
                parentImage = el.className;
            }    
        })
    };

    useEffect(() => {
 
         allRef.current.forEach((section, index) => {

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger:section,
                    start:"top-=50 center",
                   // markers: true,
                    toggleActions: "play play none reverse",
                    pinSpacing: false,
                    end:"bottom",
                   scrub: 0.2,         
                }
            })
            tl2.from(section.firstChild, {
                scale: 1.4,
                duration: 0.4,
                ease:"none"
            },0)

            tl2.from(section, {
                yPercent: 30,
                duration: 0.5,
                ease: "none",
            },0)
            tl2.to(section, {
                yPercent: -30,
                duration: 1,
                ease: "none",
            },0)
        })
  
    }, [])
    

    return (
        <>
            
            <div ref={addToRef} className="collection_section-image-container ">
                <div className="image-container size-1">
                    <img src={image2} alt="yellow diamond ring" className="the_image size-1"/>
                </div>
                <div className="image-container size-2">
                    <img src={image1} alt="yellow diamond ring" className="the_image size-2"/>
                </div>
                <div className="image-container size-3" >
                    <img src={image} alt="yellow diamond ring" className="the_image size-3"/>
                </div>
                <div className="image-container size-4">
                    <img src={image3} alt="yellow diamond ring" className="the_image size-4"/>
                </div>
            </div>
        </>


    )

}
export default GemImage;