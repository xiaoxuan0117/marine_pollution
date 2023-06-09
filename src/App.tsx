import { useState, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import i18n from "./util/i18n";

import Banner from "./components/orangnisms/Banner";
import Category from "./components/orangnisms/Category";
import PinedBack from "./components/atoms/PinedBack";
import FunctionDropdown from "./components/molecules/FunctionDropdown";
import Events from "./components/orangnisms/Events";
import OtherInfo from "./components/orangnisms/OtherInfo";
import Footer from "./components/orangnisms/Footer";

import "./App.scss";

function App() {
  const content = useRef<HTMLDivElement>(null);
  const pinedBack = useRef<HTMLDivElement>(null);
  const events = useRef<HTMLDivElement>(null);
  const category = useRef<HTMLDivElement>(null);
  const circle01 = useRef<HTMLDivElement>(null);
  const circle02 = useRef<HTMLDivElement>(null);
  const circle03 = useRef<HTMLDivElement>(null);
  const circle04 = useRef<HTMLDivElement>(null);

  const [lng, setLng] = useState(i18n.language);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pinedBack.current, {
        scrollTrigger: {
          trigger: content.current,
          start: "top top",
          end: `${
            (category.current?.offsetTop || 0) +
            (category.current?.offsetHeight || 0) +
            100
          }px bottom`,
          pin: pinedBack.current,
          // markers: {
          //   startColor: "purple",
          //   endColor: "blue",
          //   fontSize: "3rem",
          // },
        },
      });

      gsap.to(pinedBack.current, {
        backgroundColor: "#35545c",
        scrollTrigger: {
          trigger: content.current,
          scrub: 1,
          start: "top top",
          end: `bottom bottom`,
          // markers: {
          //   startColor: "purple",
          //   endColor: "blue",
          //   fontSize: "3rem",
          // },
        },
      });

      gsap.to(category.current, {
        scrollTrigger: {
          trigger: category.current,
          start: `top ${(category.current?.offsetTop || 0) - 200}px`,
          end: "bottom top",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });

      gsap.to(circle01.current, {
        x: 500,
        y: 100,
        scrollTrigger: {
          trigger: events.current,
          start: "top 500px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle02.current, {
        x: 400,
        y: 10,
        scrollTrigger: {
          trigger: events.current,
          start: "top 550px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle03.current, {
        x: -180,
        y: -150,
        scrollTrigger: {
          trigger: events.current,
          start: "top 500px",
          end: "top top",
          scrub: 2,
        },
      });

      gsap.to(circle04.current, {
        x: -50,
        y: -80,
        scrollTrigger: {
          trigger: events.current,
          start: "top 550px",
          end: "top top",
          scrub: 2,
        },
      });
    }, ".App");

    return () => ctx.revert();
  }, [lng]);

  return (
    <div className="App">
      <PinedBack
        pinedBackRef={pinedBack}
        circlesRef={[circle01, circle02, circle03, circle04]}
      />
      <div className="content" ref={content}>
        <Banner />
        <Events eventsRef={events} />
        <Category categoryRef={category} />
        <OtherInfo />
        <Footer />
      </div>
      <FunctionDropdown setLng={setLng} />
    </div>
  );
}

export default App;
