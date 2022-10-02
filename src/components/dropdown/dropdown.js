import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./dropdown.scss";

gsap.registerPlugin(ScrollTrigger);

const DropDown = () => {

    const [dropit, setDropit] = useState(false);
    const [size, setSize] = useState(38);

    const anArray = [38, 39, 40, 41];

    useEffect(() => {
        console.log("useEffect dropit:", dropit);
        const arrayT = gsap.utils.toArray(".dropdown.true");
        const arrayF = gsap.utils.toArray(".dropdown.false");
        const arrayReversed = arrayF.reverse();
        const tl = gsap.timeline({});
        arrayT.forEach((arr, index) => {
          
            tl.to(arr, {
                opacity: 1,
                duration: 0.2,
                yPercent:`${(index*100)}`,
            })
        })
        arrayReversed.forEach((arr, index) => {
            tl.to(arr, {
                opacity: 0,
                duration: 0.2,
                yPercent: `-${(10)}`,
            })
        })
       
    },[dropit])


    return (
       
                <div className="dropdown-container" onClick={() => setDropit(!dropit)}>
                    <p className="dropdown-selected">Size {size}</p>
                    {anArray.map((arr, index) => (
                        <div key={index} className={`dropdown ${dropit}`} >
                        {arr}           
                        </div>
                    ))}
                </div>
               
    )
}
export default DropDown;