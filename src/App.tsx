import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Banner from "./components/orangnisms/Banner";
import Introduction from "./components/orangnisms/Introduction";
import PinedBack from "./components/atoms/PinedBack";
import FunctionDropdown from "./components/molecules/FunctionDropdown";
import Works from "./components/orangnisms/Works";
import OtherInfo from "./components/orangnisms/OtherInfo";
import Footer from "./components/orangnisms/Footer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.scss";

function App() {
  const content = useRef<HTMLDivElement>(null);
  const pinedBack = useRef<HTMLDivElement>(null);
  const works = useRef<HTMLDivElement>(null);
  const circle01 = useRef<HTMLDivElement>(null);
  const circle02 = useRef<HTMLDivElement>(null);
  const circle03 = useRef<HTMLDivElement>(null);
  const circle04 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log("works.current?.scrollTop", works.current?.offsetTop);
    const ctx = gsap.context(() => {
      gsap.to(pinedBack.current, {
        scrollTrigger: {
          trigger: content.current,
          start: "top 0px",
          end: `${works.current?.offsetTop || 0 - 500})
          }px top`,
          pin: pinedBack.current,
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });

      gsap.to(circle01.current, {
        x: 500,
        y: 100,
        scrollTrigger: {
          trigger: works.current,
          start: "top 500px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle02.current, {
        x: 400,
        y: 10,
        scrollTrigger: {
          trigger: works.current,
          start: "top 550px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle03.current, {
        x: -180,
        y: -150,
        scrollTrigger: {
          trigger: works.current,
          start: "top 500px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle04.current, {
        x: -50,
        y: -80,
        scrollTrigger: {
          trigger: works.current,
          start: "top 550px",
          end: "top top",
          scrub: 2,
        },
      });
    }, ".App");

    return () => ctx.revert();
  });

  return (
    <div className="App">
      <PinedBack
        pinedBackRef={pinedBack}
        circlesRef={[circle01, circle02, circle03, circle04]}
      />
      <div className="content" ref={content}>
        <Banner />
        <Introduction />
        <Works worksRef={works} />
        <OtherInfo />
        <Footer />
      </div>
      <FunctionDropdown />
    </div>
  );
}

export default App;
