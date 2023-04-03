import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import WorksHeader from "../../atoms/WorksHeader";

import "../WorkItem/style.scss";
import "./style.scss";

export default function WorkItemTask() {
  const { t } = useTranslation(["works"]);

  const image01 = useRef<HTMLDivElement>(null);
  const image02 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(image01.current, {
        scrollTrigger: {
          trigger: image01.current,
          start: "top 700px",
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
          start: "top 600px",
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
          title={t("task-title")}
          subtitle={t("task-subtitle")}
          context={t("task-context")}
        />
        <div className="images-section">
          <div className="images">
            <a href="#" className="welcome">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image" ref={image01}></div>
                </div>
              </div>
            </a>
            <a href="#" className="home">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image" ref={image02}></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
