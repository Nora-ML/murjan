import React, { useEffect,useContext } from "react";

import Item from "../item_display/item";
import {ProductContext} from "../../../context/productContext.js"
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
    const { products } = useContext(ProductContext);
    const length = products && products.length;
    
    let batch1=[];
    let batch2=[];
    let batch3=[];

    const whatever = () => {
        let j;
        let h;
        let k; 
        for (let i = 0; i < 10; i++) {
            for (j= 0; j< 3; j++) {
                batch1 += [j]  
            }  
            for (h = i+3; h < i+5; h++) {
                batch2 += [h]
            }
            for (let k = h; k < h+1; k++) {
                batch3+=[k]  
            }

            j+=3
            h+=2
            k+=3
        }
    }
    whatever()
    console.log("batch1",batch1)
    console.log("batch2",batch2)
    console.log("batch3",batch3)

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

    const smallWindow = () => {
        if (window.innerWidth< 770){
            return (
                <div className="shop_items">
                    {products.map(pro => {
                        return (
                            <Item size={""} product={pro} />
                        )
                    })}
                </div>
            )
        }
    }

    const largeWindow = () => {
       /*  let cycle = (length / 3);
        let first = 3;
        let second = 2;
        let third = 1; */
        if (window.innerWidth > 770) {
            return (

                <div className="shop_items">
                    {/* THREE ITEMS MAPPING HERE */}       
                    {[...new Array(first)].map((pro,index )=> {
                       return (
                        <Item size={""} product={products[index]} />
                    ) 
                    })}
                    <div className="piled">
                        {/* TWO ITEMS MAPPING HERE */}
                        {[...new Array(second)].map((pro,index )=> {
                       return (
                        <Item size={""} product={products[index]} />
                    ) 
                        
                    })}
                    </div>
                    {/* ONE ITEM HERE */}
                    {[...new Array(third)].map((pro,index )=> {
                       return (
                        <Item size={"large"} product={products[index]} />
                    )        
                    })}
               
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