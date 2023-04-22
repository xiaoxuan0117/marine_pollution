import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Profile, { ProfileProps } from "../../molecules/Profile";
import Info, { InfoProps } from "../../molecules/Info";
import {categorys} from '../../../data/category';

import "./style.scss";

interface CategoryItemProps {
  profile: ProfileProps
  info: InfoProps

}

export default function CategoryItem(props: CategoryItemProps) {
  const {profile, info} = props;
  const introWrapper = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(introWrapper.current, {
        scrollTrigger: {
          trigger: introWrapper.current,
          start: `top bottom`,
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



  return (<div className="intro"  ref={introWrapper}>
  <div className="intro-flex">
    <Profile {...profile}/>
    <Info {...info}/>
  </div>
</div>)

}