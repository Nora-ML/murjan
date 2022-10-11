import React, { useEffect, useState, useContext } from "react";
import { FilterContext } from "../../../context/filterContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./shop_nav.scss"

gsap.registerPlugin(ScrollTrigger);

const ShopNav = () => {

    const { addToFilter, gemFilt, collFilt, catFilt } = useContext(FilterContext)

    const [gems, setGems] = useState(["gem0", "gem1", "gem2", "gem3", "gem4", "gem5", "gem6"]);
    const [collections, setCollections] = useState(["coll0", "coll1", "coll2", "coll3", "coll4", "coll5", "coll6"]);
    const [category, setCategories] = useState(["cat0", "cat1", "cat2", "cat3", "cat4", "cat5cat6","cat7", "cat8cat2", "cat3cat4", "cat5", "cat6"]);
    
    const [selected, setSelected] = useState({ gem: "", coll: "", cat: "" })
    //const [filter, setFilter] = useState({ gemFilt: [], collFilt: [], catFilt: [] })
    const [active, setActive] = useState({ gemAct: "", collAct: "", catAct: "" })

    const { gem, coll, cat } = selected;

    const { gemAct, collAct, catAct } = active;

    // activates (display) particular filter option 
    const activate = (e, name) => {
        console.log("Activate,", e, name);
        if (active[name] === "active") {
            setActive({ ...active, [name]: "deactive" })
        } else {
            Object.keys(active).map(a => (
                active[a] = "deactive"
            ))
            setActive({ ...active, [name]: "active" })
        }

    }

    // dropdown
    useEffect(() => {
        console.log("useEffect dropdown animation ")

        const tl = gsap.timeline({});

        tl
            .to(".shop_dropdown-container.deactive", {
                zIndex: -1,
                delay: 1,
            }, 0)
            .to(".shop_dropdown-container.active", {
                zIndex: 1,
            }, 0)
            .fromTo(".shop_dropdown_wrapper.active", {
                clipPath:"inset(0% 0% 50% 0%)",
                opacity: 0,
            }, {
                clipPath:"inset(0% 0% 0% 0%)",
                opacity: 1,
            }, 0.2)
            .fromTo(".shop_dropdown_wrapper.active .shop_dropdown", {
                opacity: 0,
            }, {
                opacity: 1,
         
            }, 0.2)
            .fromTo(".shop_dropdown_wrapper.deactive", {
                clipPath:"inset(0% 0% 0% 0%)",
            }, {
                clipPath:"inset(0% 0% 50% 0%)",
                opacity: 0,
                duration: 0.5,
            }, 0.2)


       
    },[active])

    // filter selection initial animation
    useEffect(() => {
        console.log("useEffect dropdown animation")
        const tl = gsap.timeline({});
        const height_B = gsap.getProperty(".shop_dropdown_selected", "height")

        tl.fromTo(".shop_dropdown_selected", {
            height: "0",
        }, {
            opacity: 1,
            height: height_B + 5,
            duration: 1,
            delay: 0.5
        }, 0)
            .set(".shop_dropdown_selected", { height: height_B + 5 })
    
    }, [])
    
    // pinning the filter and sliding contents
    useEffect(() => {
        console.log("useEffect Pinning filter")
        let ww=window.innerWidth;
     
        if (ww > 770) {
            console.log("window greater than 770",ww);
            gsap.to(".shop_dropdown-container", {
                scrollTrigger: {
                    trigger: ".shop_dropdown-container",
                    toggleActions: "play play none reverse",
                    pin: ".filter_container",
                   // markers: true,
                    pinSpacing: false,
                    end: "+=3000",
                    start: "top top+=5%",
                    duration: 5,
                    ease: "slow(0.7, 0.7, false)",
                },
                xPercent: 20
              })
        } else {

          
            gsap.to(".filter_container", {
                scrollTrigger: {
                    trigger: ".filter_container",
                    pin: ".filter_container",
                    toggleActions: "play play none reverse",
                    //markers: true,
                    pinSpacing: false,
                    start: "top+=10% top+=5%",
                    end: "+=6000",
                },
                
            },0)
            
     
            ScrollTrigger.batch(".shop_dropdown-container", {
                interval:1,
                onEnter: batch => {
                    batch.forEach((filter, index) => {
                    
                        gsap.to(filter, {
                            keyframes: [
                                {xPercent:`${(100*index)-30}`},
                                {yPercent:`${index>0? -100*index:0}`,delay:-0.5, }, 
                               ],
                            scrollTrigger: {
                                trigger: filter,
                                toggleActions: "play play none reverse",
                                //markers: true,
                                start: `top-=${index*8}% top+=5%`,
                                end: `top-=${index*8}% top+=5%`,
                                duration: 5,
                                ease: "slow(0.7, 0.7, false)",
                            },
                            width: `${100 / 3}vw`,
                            stagger:0.1,
                   
                        })
                    })
                },
                onLeave: () => {
                    gsap.to(".filter_container", {                        
                        duration: 0.5,
                        delay:-0.2,
                        clipPath: "inset(0% 0% 70% 0%)"
                    })
                },
                onEnterBack: () => {
                    gsap.to(".filter_container", {
                        duration: 0.5,
                        delay:-1,
                        clipPath: "inset(0% 0% 0% 0%)"
                    })
                }

            }, 0)
    
        }
         

    })


    
        return (
       
            <div className="filter_container">
                <div className={`shop_dropdown-container ${catAct}`} >
                    <p className="shop_dropdown_selected" onClick={(e) => activate(e, "catAct")}>{cat ? cat : "ALL Categories"}</p>
                    <div className={`shop_dropdown_wrapper ${catAct}`}>

                        {category.map((arr, index) => (
                            <div key={index} onClick={() => addToFilter("catFilt", arr)} className={`shop_dropdown ${catAct} ${catFilt.includes(arr)?"filter":""}`} >
                                <p >{arr}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className={`shop_dropdown-container ${collAct}`} >
                    <p className="shop_dropdown_selected" onClick={(e) => activate(e, "collAct")}>{coll ? coll : "ALL Collections"}</p>
                    <div className={`shop_dropdown_wrapper ${collAct}`}>

                        {collections.map((arr, index) => (
                            <div key={index} onClick={() => addToFilter("collFilt", arr)} className={`shop_dropdown ${collAct} ${collFilt && collFilt.includes(arr)?"filter":""}`} >
                                <p >{arr}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className={`shop_dropdown-container ${gemAct}`}>
                    <p className="shop_dropdown_selected" onClick={(e) => activate(e, "gemAct")}>{gem ? gem : "ALL Gems"}</p>
                    <div className={`shop_dropdown_wrapper ${gemAct}`}>

                        {gems.map((arr, index) => (
                            <div key={index} onClick={()=>addToFilter("gemFilt",arr)} className={`shop_dropdown ${gemAct} ${gemFilt && gemFilt.includes(arr)?"filter":""}`} >
                                <p >{arr}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
       
        )

}
export default ShopNav;