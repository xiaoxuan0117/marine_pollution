import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";
import ScoreInfoItem from "../../atoms/ScoreInfoItem";

export default function ScoreInfo() {
  const { t } = useTranslation(["otherInfo"]);

  const scoreItems = [
    {
      type: "gpa",
      title: t("gpa"),
      context: t("gpa-value"),
    },
    {
      type: "toeic",
      title: t("toeic"),
      context: t("toeic-value"),
    },
    {
      type: "course",
      title: t("course"),
      context: t("course-value"),
    },
  ];
  return (
    <div className="scoreInfo-wrapper">
      <div className="scoreInfo">
        <div className="title">{t("score-title")}</div>
        <div className="items-section">
          <div className="items">
            {scoreItems &&
              scoreItems.map((scoreItem) => (
                <div key={scoreItem.type} className="item">
                  <ScoreInfoItem
                    type={scoreItem.type}
                    title={scoreItem.title}
                    context={scoreItem.context}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
