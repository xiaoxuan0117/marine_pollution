import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Profile from "../../molecules/Profile";
import Skills from "../../molecules/Skills";

import "./style.scss";

export default function Introduction() {
  const introWrapper = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(introWrapper.current, {
        scrollTrigger: {
          trigger: introWrapper.current,
          start: `top ${(introWrapper.current?.offsetTop || 0) - 100}px`,
          end: "bottom top",
          toggleClass: "active",
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem",
          },
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <div id="intro-wrapper" className="intro-wrapper" ref={introWrapper}>
      <div className="intro">
        <div className="intro-flex">
          <Profile />
          <Skills />
        </div>
      </div>
    </div>
  );
}
