import React, { useEffect } from "react";
import image from "../../../images/bangles1_mix.jpg"
import image1 from "../../../images/pendant1.jpg"
import image3 from "../../../images/ring1_silver.jpg"
import image2 from "../../../images/band1.jpg"
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
        


        const array = gsap.utils.toArray(".shop_item");

        console.log(array);
  

        array.forEach((arr,index )=> {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: arr,
                   // markers: true,
                    start: `center-=${20+index} bottom`,
                    end: "bottom",
                    toggleActions:"play play none reset"
                }
            })
            tl.to(arr, {
                yPercent: -15,
                opacity: 1,
                delay:`${0.07*(index)}`,
            },0)
                .fromTo(".shop_item-img", { scale: 1.8}, {
                    scale: 1,
                    duration: 1.5,
                    ease:"slow",
                delay:`${0.07*(index)}`,
            },0)
                .fromTo(arr.firstChild, { yPercent: 5 }, {
                    yPercent:0,  
                    duration: 1,
                    ease:"slow",
                    delay:`${0.07*(index)}`,
            },0)
                .to(".shop_item-details", {
                    yPercent:-5,
                    opacity: 1,
                    duration:1,
                    
                    delay:`${0.8*(index)}`,
            },0.5)


        })
       
    })

    return (
        <div className="shop_items">
            <div className="shop_item">
                <Link to="/product">
                    <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                </Link> 
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                    </div>
                   
           </div>
            <div className="shop_item small">
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image1}`} alt=""/>
                    </div>
                    </Link>
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image2}`} alt=""/>
                    </div>
                    </Link>
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image}`} alt=""/>
                    </div>
                    </Link>
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image3}`} alt=""/>
                    </div>
                    </Link>
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image1}`} alt=""/>
                    </div>
                    </Link>
            <Link to="/product">
                <div className="image_wrapper small">
                    <img className="shop_item-img small" src={`${image}`} alt=""/>
                    </div>
                    </Link>
               
           </div>
            <div className="shop_item">
            <Link to="/product">
                    <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image2}`} alt=""/>
                </div>
                </Link> 
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item large">
                <div className="image_wrapper large">
                <img className="shop_item-img large" src={`${image3}`} alt=""/>
                </div>
                <div className="shop_item-details large">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item large">
                <div className="image_wrapper large">
                <img className="shop_item-img large" src={`${image2}`} alt=""/>
                </div>
                <div className="shop_item-details large">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image2}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image1}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image2}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
            </div>
            
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image3}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image1}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image2}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
            <div className="shop_item">
                <div className="image_wrapper">
                <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="shop_item-details">
                    <p className="shop_item_details-name">necklace ol</p>
                    <p className="shop_item_details-price">2000 - 4000</p>
                </div>
           </div>
        </div>
    )
}
export default ShopItems;