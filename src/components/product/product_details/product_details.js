import React, { useEffect, useState } from "react";
import image from "../../../images/bangles1_mix.jpg"
import image1 from "../../../images/pendant1.jpg"
import image3 from "../../../images/ring1_silver.jpg"
import image2 from "../../../images/band1.jpg"
import DropDown from "../../dropdown/dropdown.js"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_details.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {



    useEffect(() => {
        console.log("useEffect product_details");
        const array = gsap.utils.toArray(".image_wrapper");
        const arrayReversed=array.reverse()
    
        const tl = gsap.timeline({/* repeat:-1 */});
        arrayReversed.forEach((arr, index) => {

           /*  tl.fromTo(arr,{xPercent:0},
                {
                xPercent: 50,
                    ease: "none",
                    yoyo: true,
                    delay: 1,
                    duration: 2
            }) */
         /*    tl.to(".shop_item-img",
                {
                xPercent: 100,
                scale:1.3,
                opacity: 1,
                delay:1,
                ease:"none",
            }) */
  
        })
       
    })


    return (
        <div className="product_detail_page_container">
            <div className="product_image_container">
                <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image1}`} alt=""/>
                </div>
                <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image}`} alt=""/>
                </div>
                <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image2}`} alt=""/>
                </div>
                <div className="image_wrapper">
                    <img className="shop_item-img" src={`${image3}`} alt=""/>
                </div>
            </div>
            <div className="product_details_container">
                <div className="product_details product_details-collection_name">    
                    <p className="collection-name">
                        Blossom CollectionBy Tjep.</p>
                </div>
                <div className="product_details product_details-item-name">
                    <h1 className="item-name">Choker</h1>
                </div>
                
                <div className="product_details product_details-options">
                    <DropDown/>
                    <DropDown/>
                </div>
                <div className="product_details product_details-action">
                    <div className="action-box">
                        <p className="action">$ 2955  -  Order</p>
                    </div>
                    <div className="action-box">
                        <p className="action">Personalize</p>
                    </div>
            
                </div>
                <div className="product_details product_details-details">
                    <div className="product-details-control">
                        <p className="control">Description</p>
                        <p className="control">Product Details</p>
                        <p className="control">Size Chart</p>
                    </div>
                    <div className="product-details-paragraph">
                        <p className="details">This beautifully crafted 18k rose gold choker is designed like a stem of a flower elegantly wrapping around your neck. Showcasing delicate details like the heart shaped ending this choker celebrates modern femininity.</p>
                    </div>
            
                    
                </div>

                
            
         </div>
            
        </div>
    )
}
export default ProductDetails;