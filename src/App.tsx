import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import i18n from "./util/i18n";

import Banner from "./components/orangnisms/Banner";
import Introduction from "./components/orangnisms/Introduction";
import PinedBack from "./components/atoms/PinedBack";
import FunctionDropdown from "./components/molecules/FunctionDropdown";
import Works from "./components/orangnisms/Works";
import OtherInfo from "./components/orangnisms/OtherInfo";
import Footer from "./components/orangnisms/Footer";

import "./App.scss";

function App() {
  const content = useRef<HTMLDivElement>(null);
  const pinedBack = useRef<HTMLDivElement>(null);
  const works = useRef<HTMLDivElement>(null);
  const circle01 = useRef<HTMLDivElement>(null);
  const circle02 = useRef<HTMLDivElement>(null);
  const circle03 = useRef<HTMLDivElement>(null);
  const circle04 = useRef<HTMLDivElement>(null);

  const [lng, setLng] = useState(i18n.language);

  useLayoutEffect(() => {
    console.log(
      "height",
      works.current?.offsetTop,
      works.current?.offsetHeight
    );
    const ctx = gsap.context(() => {
      gsap.to(pinedBack.current, {
        scrollTrigger: {
          trigger: content.current,
          start: "top top",
          end: `${
            (works.current?.offsetTop || 0) +
            (works.current?.offsetHeight || 0) +
            10
          }px bottom`,
          pin: pinedBack.current,
          markers: {
            startColor: "purple",
            endColor: "blue",
            fontSize: "3rem",
          },
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
  }, [lng]);

  useEffect(() => {
    "rerender";
  }, [lng]);

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
      <FunctionDropdown setLng={setLng} />
    </div>
  );
}

export default App;
