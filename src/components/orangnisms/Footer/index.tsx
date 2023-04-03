import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import circle_02 from "../../../assets/circle_02.svg";
import circle_03 from "../../../assets/circle_03.svg";

import "./style.scss";

export default function Footer() {
  const { t } = useTranslation(["footer"]);

  const footer = useRef<HTMLDivElement>(null);
  const circle02 = useRef<HTMLDivElement>(null);
  const circle03 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circle02.current, {
        x: -150,
        y: -100,
        scrollTrigger: {
          trigger: footer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 2,
        },
      });
      gsap.to(circle03.current, {
        x: -300,
        y: -100,
        scrollTrigger: {
          trigger: footer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="footer-wrapper" ref={footer}>
      <div className="footer">
        <div className="contect">
          <div className="title">{t("contact")}</div>
          <a href="mailto: xiaoxuanpan@gmail.com">{t("email")}</a>
          <br />
          <a href="https://github.com/xiaoxuan0117" target="_blank">
            {t("github")}
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/xiao-xuan-pan-2b464922a"
            target="_blank"
          >
            {t("linkedIn")}
          </a>
        </div>
      </div>
      <div className="circle_02" ref={circle02}>
        <img src={circle_02} alt="circle" />
      </div>
      <div className="circle_03" ref={circle03}>
        <img src={circle_03} alt="circle" />
      </div>
    </div>
  );
}
