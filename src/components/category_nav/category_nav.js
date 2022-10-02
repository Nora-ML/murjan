import React,{useRef,useEffect, useLayoutEffect, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../images/yellow_ring.jpg"
import image2 from "../../images/pink_ring.jpg"
import "./category_nav.scss"
gsap.registerPlugin(ScrollTrigger);


const CategoryNav = () => {
    const [state, setState] = useState({
        rings:"active",necklace:"",bracelet:"",watch:"",earrings:""
    })
    const [counter, setCount] = useState(0);
    const { rings, necklace, bracelet, watch, earrings } = state;


  
    const arrowActivate = (e, name) => {
        const length = Object.keys(state).length;
        let newCount = counter;
        if (name === "right") {
            console.log("name", name,"counter :",counter);
            newCount=newCount + 1 < length ? newCount + 1 : 0;      
        } else {
            console.log("name",name)
            newCount=newCount - 1 >= 0 ? newCount - 1 : length-1;
        }
        Object.keys(state).map((key, index) => {
            console.log("key,",key,"index:",index,"counter:",counter,"newCount:",newCount)
            if(state[key]==="active"){
                return state[key] = "faded";
            }else if (index === newCount) {
                return state[key] = "active"; 
            }else{
                return state[key] = "";
            }
        })
        setCount(newCount);
    };

    const activate = () => {
        
    }

    useEffect(() => {
        
        console.log("state:", state)
        
        // animation for faded state  
            gsap.to(".category_nav_images-container.faded ", {
                opacity: 0.5,
                scale: 0.8,
                duration:0.5,
                //easing: "linear",
                xPercent:-180,
                yoyo: true,
                //paused: true
            });
   
            gsap.from(".category_nav_images-container.active ", {
                opacity: 0.8,
                duration: 1,
                scale: 1.4,
                //easing: "linear",
                xPercent: 0,
                yoyo: true,
                //paused: true
              });
            gsap.to(".category_nav_images-container.active ", {
                opacity: 1,
                duration: 1,
                scale: 1,
                //easing: "linear",
                xPercent: -100,
                yoyo: true,
                //paused: true
              });
        
    })
    useLayoutEffect(() => {
        
        console.log("state:", state)
        
        // animation for faded state  
        
            gsap.to(".collection_section_header.faded ", {
                //opacity: 0.8,
                duration:0.5,
                xPercent:-10,
                yoyo: true,
            });
   
            gsap.to(".collection_section_header.active", {
                opacity: 1,
                duration: 1,
                scale: 1.1,
                //xPercent: 100,
                yoyo: true,
              });

        
    })


    return (
        <>
                <div className={`category_nav_images-container ${rings} `}>
                    <div className="cat_card">
                        <h2>RINGS</h2>
                        <p> some nonsense about cat</p>
                    </div>
                    <div className="cat_images category_nav_images-image1" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                    <div className="cat_images category_nav_images-image2" style={{backgroundImage:`url(${image1})`}}>
                    </div> 
                    <div className="cat_images category_nav_images-image3" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                </div>
                <div className={`category_nav_images-container ${necklace}`}>
                    <div className="cat_card">
                        <h2>Necklaces</h2>
                        <p> some nonsense about cat</p>
                    </div>
                    <div className="cat_images category_nav_images-image1" style={{backgroundImage:`url(${image2})`}}>
                    </div>
                    <div className="cat_images category_nav_images-image2" style={{backgroundImage:`url(${image2})`}}>
                    </div> 
                    <div className="cat_images category_nav_images-image3" style={{backgroundImage:`url(${image2})`}}>
                    </div>
                </div>
                <div className={`category_nav_images-container ${bracelet}`}>
                    <div className="cat_card">
                        <h2>Bracelet</h2>
                        <p> some nonsense about cat</p>
                    </div>
                    <div className="cat_images category_nav_images-image1" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                    <div className="cat_images category_nav_images-image2" style={{backgroundImage:`url(${image2})`}}>
                    </div> 
                    <div className="cat_images category_nav_images-image3" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                </div>
                <div className={`category_nav_images-container ${watch}`}>
                    <div className="cat_card">
                        <h2>watch</h2>
                        <p> some nonsense about cat</p>
                    </div>
                    <div className="cat_images category_nav_images-image1" style={{backgroundImage:`url(${image2})`}}>
                    </div>
                    <div className="cat_images category_nav_images-image2" style={{backgroundImage:`url(${image2})`}}>
                    </div> 
                    <div className="cat_images category_nav_images-image3" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                </div>
                <div className={`category_nav_images-container ${earrings}`}>
                    <div className="cat_card">
                        <h2>Earings</h2>
                        <p> some nonsense about cat</p>
                    </div>
                    <div className="cat_images category_nav_images-image1" style={{backgroundImage:`url(${image1})`}}>
                    </div>
                    <div className="cat_images category_nav_images-image2" style={{backgroundImage:`url(${image1})`}}>
                    </div> 
                    <div className="cat_images category_nav_images-image3" style={{backgroundImage:`url(${image2})`}}>
                    </div>
                </div>
        
           
            
            <div className="category_nav_category-container">
                    <h2 onClick={(e)=>activate(e,"rings")} className={`collection_section_header ${rings}`}>
                        Rings
                    </h2>
                    <h2 onClick={(e)=>activate(e,"necklace")} className={`collection_section_header ${necklace}`}>
                    Necklaces
                    </h2>
                    <h2 onClick={(e)=>activate(e,"bracelet")} className={`collection_section_header ${bracelet}`}>
                        Bracelets
                    </h2>
                    <h2 onClick={(e)=>activate(e,"watch")} className={`collection_section_header ${watch}`}>
                    Watches 
                    </h2>
                    <h2 onClick={(e)=>activate(e,"earrings")} className={`collection_section_header ${earrings}`}>
                        Earings
                    </h2>
                    
            </div>
            <div className="category_nav-arrows">
                    <div  onClick={(e)=>arrowActivate(e,"left")} className="arrow left_arrow">Left</div>
                    <div  onClick={(e)=>arrowActivate(e,"right")} className="arrow right_arrow">Right</div>
            </div> 
                
        </>


    )

}
export default CategoryNav;