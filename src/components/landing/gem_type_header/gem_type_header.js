import React,{useRef,useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./gem_type_header.scss"
gsap.registerPlugin(ScrollTrigger);


const GemHeader = () => {
    const headerRef = useRef([]);
    headerRef.current=[]
    let parent="" ;


    const addToRef = (el) => {

        if (!el) return "";

        const theChildren = Object.keys(el.children);

        theChildren.forEach(child => {

            let data = el.children[child];

            if ( data && !headerRef.current.includes(data)) {
                //console.log("Adding chidren",data)
                headerRef.current.push(data)
            }
            if ( parent==="") {
                //console.log("Adding parent,",{el})
                parent = el.className;
            }
    
        })
    };
    
    useLayoutEffect(() => {
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger:`.${parent}`,
                pin: true,
                scrub:1,
                start: "top-=200 top",
                //pinSpacing: false,
               // markers: true,
                end:"+=1400"
            },
        })
 
        headerRef.current.forEach((header, index) => {

            tl3.from(header, {
                yPercent: 100,
                ease: "none",
                opacity:0,
                duration:3,
            })
            tl3.to(header, {
                yPercent: -50,
                ease: "none",
                opacity:0,
                //duration:4,
            })
        })
    },[])

    return (
        <>
            <div ref={addToRef}  className="collection_section-header-container">
                <h2 className="collection_section_header">
                    Ruby
                </h2>
                <h2 className="collection_section_header">
                    Jade
                </h2>
                <h2 className="collection_section_header">
                    Yellow Stone
                </h2>
                <h2 className="collection_section_header">
                    Diamond
                </h2>
            </div>
        </>


    )

}
export default GemHeader;