import React, { useEffect} from "react";
import image1 from "../../../images/earing_1(1).png";
import image from "../../../images/bangle_1(1).png";
import image2 from "../../../images/bangles_2(1).png";
import image3 from "../../../images/necklace_1(2).png";
import image4 from "../../../images/necklace_3(2).png";
import DropDown from "../../dropdown/dropdown.js"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_suggestion.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {



    useEffect(() => {
        console.log("useEffect product_details");
        var tl = gsap.timeline(/* { repeat: -1 ,repeatDelay:0} */);
    
        tl.fromTo(".shop_item-img",
            {
                clipPath: "inset(0% 100% 0% 0%)",
                scale: 1.3,
                duration: 2,
                delay:1,
            },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                scale: 1,
                ease: 'power2.out',
                stagger: 2.5,
                yPercent: -9,
                delay:1,
            })       
    })



    return (
        <div className="product_detail_page_container">
            <div className="product_image_container" /* style={{backgroundImage:`url(${image3})`}} */>
                
                    <img className="shop_item-img-default" src={`${image3}`} alt=""/>
                    <img className="shop_item-img" src={`${image1}`} alt=""/>
                
                
                    <img className="shop_item-img" src={`${image}`} alt=""/>
                
                
                    <img className="shop_item-img" src={`${image2}`} alt=""/>
                
                
                    <img className="shop_item-img" src={`${image3}`} alt=""/>
                
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