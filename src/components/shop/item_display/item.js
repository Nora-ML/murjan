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
import "./item.scss"
// item display requirment
// 1- appear on scroll (one by one)
// 2- container moves up slightly
// 3- inner image zooms out slightly
// 4- item details slide in after the image  (one by one)

gsap.registerPlugin(ScrollTrigger);



const Item = ({size,product}) => {
    const { name, description, imageUrl, price } = product;

    return (
        <div className={`shop_item ${size}`}>
            <Link to="/product" className={`image_wrapper ${size}`}>
                <img className={`shop_item-img ${size}`} src={imageUrl} alt="" />
            </Link>
            <div className={`shop_item-details ${size}`}>
                <p className="shop_item_details-name">{name}</p>
                <p className="shop_item_details-price">{price}</p>
            </div>
        </div>
    )
}
export default Item;