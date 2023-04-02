import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Banner from "./components/orangnisms/Banner";
import Introduction from "./components/orangnisms/Introduction";
import PinedBack from "./components/atoms/PinedBack";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.scss";

function App() {
  const content = useRef<HTMLDivElement>(null);
  const pinedBack = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pinedBack.current, {
        scrollTrigger: {
          trigger: content.current,
          start: "top 0px",
          // end: "700px 450px",
          pin: pinedBack.current,
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
    }, ".App");

    return () => ctx.revert();
  });

  return (
    <div className="App">
      <PinedBack PinedBackRef={pinedBack} />
      <div className="content" ref={content}>
        <Banner />
        <Introduction />
      </div>
    </div>
  );
}

export default App;
