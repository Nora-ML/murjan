import React, { useEffect } from "react";
import image from "../../../images/bangle_1(1).png";
import image1 from "../../../images/earing_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";
import image5 from "../../../images/ring_1(1).png";
import image6 from "../../../images/ring_2(1).png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./shop_items.scss"
// item display requirment
// 1- appear on scroll (one by one)
// 2- container moves up slightly
// 3- inner image zooms out slightly
// 4- item details slide in after the image  (one by one)

gsap.registerPlugin(ScrollTrigger);



const ShopItems = () => {

    useEffect(() => {
        console.log("useEffect shop_items");

        gsap.set(".image_wrapper",{yPercent:-10})
        

        ScrollTrigger.batch(".image_wrapper", {
            onEnter: batch => {
                batch.forEach((item, index) => {

                    gsap.fromTo(item, { yPercent: 10 }
                        , {
                        scrollTrigger: {
                            trigger: item,
                           // markers: true,
                            start: "center-=10 bottom",
                            end: "bottom bottom",
                            toggleActions: "play play none reset"
                            },
                        yPercent:0,  
                        duration: 0.9,
                        ease:"none",
                        delay:`${0.3*(index)}`,
                        opacity: 1,
                        stagger:0.2,
                    })
                })
            },
            once:true,
        },0)
        ScrollTrigger.batch(".shop_item-img", {
            onEnter: batch => {
                batch.forEach((item, index) => {
         
                    gsap.fromTo(item, { scale: 1.2, yPercent: -10 }, {
                        scrollTrigger: {
                            trigger: item,
                            //markers: true,
                            start: "center-=10 bottom",
                            end: "bottom bottom",
                            toggleActions: "play play none reset"
                        },
                        scale: 0.9,
                        duration: 0.5,
                        yPercent: 10,
                        opacity: 1,
                        ease: "none",
                        delay: `${0.3 * (index)}`,
                        stagger: 0.3,
                    })
                })
            },
            once: true,
        },"-=25%")
        ScrollTrigger.batch(".shop_item-details", {
            onEnter: batch => {
                batch.forEach((item, index) => {
                    gsap.fromTo(item, { yPercent: 20 }
                        , {
                        scrollTrigger: {
                            trigger: item,
                            //markers: true,
                            start: "bottom+=30 bottom",
                            end: "bottom+=30 bottom",
                            toggleActions: "play play none reset"
                            },
                        yPercent:0,  
                        duration: 0.5,
                        ease:"none",
                        delay:`${0.3*(index)}`,
                        opacity: 1,
                        stagger:0.4,
                    })
                })
            },
            once: true,
        },"-=25%")
       
    })
   /*  useEffect(() => {

        const array = gsap.utils.toArray(".shop_item");

        console.log(array);
  

        array.forEach((arr,index )=> {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: arr,
                    //markers: true,
                    start: `center-=${20+index} bottom`,
                    end: "bottom bottom",
                    toggleActions:"play play none none"
                }
            })
            tl.to(arr, {
                yPercent: -15,
                opacity: 1,
                delay:`${0.07*(index)}`,
            },0)
                .fromTo(".shop_item-img", { scale: 1.3,yPercent:-10}, {
                    scale: 0.9,
                    //duration: 1.2,
                    yPercent:10,
                    opacity:1,
                    ease:"none",
                    delay:`${0.07*(index)}`,
                }, 0)
                .fromTo(arr.firstChild, { yPercent: 10 }, {
                    yPercent:0,  
                    duration: 1,
                    ease:"none",
                    delay:`${0.07*(index)}`,
            },0)
                .to(".shop_item-details", {
                    yPercent:-5,
                    opacity: 1,
                    duration:1,
                    delay:`${0.8*(index)}`,
                }, 0.5)


        })
       
    }) */

    const smallWindow = () => {
        if (window.innerWidth< 770){
            return (
                <div className="shop_items">
                    <div className="shop_item">
                        <Link to="/product" className="image_wrapper">
                                <img className="shop_item-img" src={`${image}`} alt=""/>
                        </Link>
                        <div className="shop_item-details">
                            <p className="shop_item_details-name">{"product.name"}</p>
                            <p className="shop_item_details-price">{"product.price"}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
    const largeWindow = () => {
        if (window.innerWidth > 770) {
            return (
                <div className="shop_items">
                     {/* THREE ITEMS MAPPING HERE */}
                    <div className="shop_item">
                        <Link to="/product" className="image_wrapper">
                            <img className="shop_item-img" src={`${image}`} alt="" />
                        </Link>
                        <div className="shop_item-details">
                            <p className="shop_item_details-name">{"product.name"}</p>
                            <p className="shop_item_details-price">{"product.price"}</p>
                        </div>
                    </div>
                    <div className="piled">
                        {/* TWO ITEMS MAPPING HERE */}
                        <div className="shop_item">
                            <Link to="/product" className="image_wrapper">
                                <img className="shop_item-img" src={`${image1}`} alt="" />
                            </Link>
                            <div className="shop_item-details">
                                <p className="shop_item_details-name">{"product.name"}</p>
                                <p className="shop_item_details-price">{"product.price"}</p>
                            </div>
                        </div>
                    </div>
                    {/* ONE ITEM HERE */}
                    <div className="shop_item large">
                        <div className="image_wrapper large">
                            <img className="shop_item-img large" src={`${image2}`} alt="" />
                        </div>
                        <div className="shop_item-details large">
                            <p className="shop_item_details-name">{"product.name"}</p>
                            <p className="shop_item_details-price">{"product.price"}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
         <>
            {smallWindow()}
            {largeWindow()}
         </>
    )
}
export default ShopItems;