import React from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {categorys} from '../../../data/category';
import CategoryItem from "../../molecules/CategoryItem";

import "./style.scss";

interface CategoryProps {
  categoryRef: React.LegacyRef<HTMLDivElement>;
}

export default function Category(props: CategoryProps) {
  const {categoryRef} = props;
  const { t } = useTranslation(["category"]);

  return (
    <div id="intro-wrapper" className="intro-wrapper" ref={categoryRef}>
    <div className="intro-title">{t('title')}</div>
    <div className="intro-summary">{t('summary')}</div>
    {categorys.map((category, index) => {
      return (<CategoryItem key={category.profile.name} profile={category.profile} info={category.info}/>
      )
    })
    }
    </div>
  );
}
