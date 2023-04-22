import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Profile from "../../molecules/Profile";
import Info from "../../molecules/Info";
import {categorys} from '../../../data/category';

import "./style.scss";

export default function Category() {
  const { t } = useTranslation(["category"]);
  const introWrapper = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(introWrapper.current, {
        scrollTrigger: {
          trigger: introWrapper.current,
          start: `top ${(introWrapper.current?.offsetTop || 0) - 200}px`,
          end: "bottom top",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <div id="intro-wrapper" className="intro-wrapper" ref={introWrapper}>
    <div className="intro-title">{t('title')}</div>
    <div className="intro-summary">{t('summary')}</div>
    {categorys.map((category, index) => {
      return (
        <div className="intro" key={index}>
          <div className="intro-flex">
            <Profile {...category.profile}/>
            <Info {...category.info}/>
          </div>
        </div>
      )
    })
    }
    </div>
  );
}
