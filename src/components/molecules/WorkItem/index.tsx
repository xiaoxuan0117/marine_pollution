import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import WorksHeader from "../../atoms/WorksHeader";

import "./style.scss";

export default function WorkItem() {
  const { t } = useTranslation(["works"]);

  const image01 = useRef<HTMLDivElement>(null);
  const image02 = useRef<HTMLDivElement>(null);
  const image03 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(image01.current, {
        scrollTrigger: {
          trigger: image01.current,
          start: "top 800px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
      gsap.to(image02.current, {
        scrollTrigger: {
          trigger: image02.current,
          start: "top 750px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
      gsap.to(image03.current, {
        scrollTrigger: {
          trigger: image03.current,
          start: "top 700px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <div className="workItem-wrapper">
      <div className="workItem">
        <WorksHeader
          title={t("music-title")}
          subtitle={t("music-subtitle")}
          context={t("music-context")}
        />
        <div className="images-section">
          <div className="click">{t("click-img")}</div>
          <div className="images">
            <a
              href="https://xiaoxuan0117.github.io/webDesign_R_and_B/"
              className="r-and-b"
            >
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image" ref={image01}></div>
                </div>
              </div>
            </a>
            <a
              href="https://xiaoxuan0117.github.io/webDesign_Rap/"
              className="rap"
            >
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image" ref={image02}></div>
                </div>
              </div>
            </a>
            <a
              href="https://xiaoxuan0117.github.io/webDesign_Kpop/"
              className="kpop"
            >
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image" ref={image03}></div>
                </div>
              </div>
            </a>
          </div>
          <div className="swipe">{t("swipe-to-right")}</div>
        </div>
      </div>
    </div>
  );
}
