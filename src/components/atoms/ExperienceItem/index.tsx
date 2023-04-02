import React from "react";
import { useTranslation } from "react-i18next";

import "swiper/css";

import "./style.scss";

export default function ExperienceItem() {
  const { t } = useTranslation(["introduction"]);
  const projects = [
    {
      type: "cart",
      title: t("cart"),
      context: t("cart-context"),
    },
    {
      type: "layout",
      title: t("layout"),
      context: t("layout-context"),
    },
    {
      type: "error",
      title: t("error"),
      context: t("error-context"),
    },
  ];
  return (
    <div className="expItem-wrapper">
      <div className="expItem">
        <div className="item-title">{t("project-experience")}</div>
        <div className="item-context">{t("project-context")}</div>
        <div className="project-section">
          <div className="projects">
            {projects.map((project) => (
              <div key={project.type} className="project">
                <div className="title">{project.title}</div>
                <div className="divided"></div>
                <div className="context">{project.context}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
