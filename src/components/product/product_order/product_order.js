import React, { useEffect} from "react";
import DropDown from "../../dropdown/dropdown.js"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./product_order.scss";

gsap.registerPlugin(ScrollTrigger);

const ProductOrder = ({ expand }) => {
    
    useEffect(() => {
        console.log("useeffect productorder expand,",expand)
     
        if (expand === true) {
            gsap.fromTo(".product_order_container", {
                clipPath: "inset(0% 100% 0% 0%)",
                opacity:0
                
            },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.5,
                    opacity:1
             
                })
                ScrollTrigger.batch(".product_order_container", {
                    onEnter: batch => {
                        batch.forEach((ele, index) => {
                            gsap.fromTo(ele.children, {xPercent:-15,},{xPercent:0,duration:0.9,delay:`${0.3*index}`,stagger:0.1,opacity:1})
                        })
                    }
                })
                
        }
        if (expand === false) {
            gsap.fromTo(".product_order_container", {
                clipPath: "inset(0% 0% 0% 0%)",
                
            },
                {
                    clipPath: "inset(0% 0% 0% 100%)",
                    duration: 0.5,
                   
                })
                ScrollTrigger.batch(".product_order_container", {
                    onEnter: batch => {
                        batch.forEach((ele, index) => {
                            gsap.to(ele.children,{xPercent:15,duration:0.9,delay:`${0.3*index}`,stagger:0.1,opacity:0})
                        })
                    }
                })
              
        } 
    },[expand])


    return (

        <div className="product_order_container">
            <div className="product_details">    
                <h3 className="item-name">Choker</h3>
                <h3 className="item-size">size -38</h3>
                <h3 className="item-price">$ 200</h3>
            </div>
    
            <div className="product_enquiry">
                <h1>Product inquiry form</h1>
            </div>
        
        </div>
    )
}
export default ProductOrder;