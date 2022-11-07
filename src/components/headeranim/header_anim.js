import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./header_anim.scss";


const HeadAnim = ({ text }) => {
  const rootz = useRef();
  const array = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      array.push("&nbsp;");
    } else {
      array.push([text[i]]);
    }
  }
  useEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      array.forEach((item, i) => {
        console.log(`.char${i}`);
        gsap.to(`.char${i}`, {
          translateY: "0px",
          ease: "power3.inOut",
          delay: i * 0.2
        });
        gsap.fromTo(
          ".text",
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5 }
        );
      });
    }, rootz); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={rootz} className="text-container">
        <div className="text">
          {array.map((item, i) => (
            <h1 className={`char${i}`}>
              {item === "&nbsp;" ? <h1>&nbsp;</h1> : item}{" "}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeadAnim;
