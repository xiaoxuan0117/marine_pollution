import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/scrollbar";
import scroll from "../../../assets/scroll.svg";

import "./style.scss";

export default function SkillItem() {
  const { t } = useTranslation(["introduction"]);

  const skills = [
    {
      type: "front-end",
      title: t("front-end"),
      context: t("front-end-skills"),
    },
    {
      type: "back-end",
      title: t("back-end"),
      context: t("back-end-skills"),
    },
    {
      type: "package",
      title: t("package"),
      context: t("package-skills"),
    },
    {
      type: "other",
      title: t("other"),
      context: t("other-skills"),
    },
    {
      type: "design",
      title: t("design"),
      context: t("design-skills"),
    },
  ];
  return (
    <div className="skillItem-wrapper">
      <div className="skillItem">
        <div className="itme-title">{t("web-skills")}</div>
        <div className="scroll">
          <img src={scroll} alt="scroll" />
        </div>
        {skills.map((skill) => (
          <div key={skill.title} className={`skill ${skill.type}`}>
            <div className="title">{skill.title}</div>
            <div className="context">{skill.context}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
