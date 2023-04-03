import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";
import CondingInfoItem from "../../atoms/CodingInfoItem";

export default function CodingInfo() {
  const { t } = useTranslation(["otherInfo"]);

  const codingItems = [
    {
      type: "ai",
      title: t("ai"),
      context: t("ai-context"),
    },
    {
      type: "data-structure",
      title: t("data-structure"),
      context: t("data-structure-context"),
    },
    {
      type: "project-manage",
      title: t("project-manage"),
      context: t("project-manage-context"),
    },
  ];

  return (
    <div className="codingInfo-wrapper">
      <div className="codingInfo">
        <div className="title">{t("coding-title")}</div>
        <div className="items-section">
          <div className="items">
            {codingItems &&
              codingItems.map((codingItem) => (
                <div className="item" key={codingItem.type}>
                  <CondingInfoItem
                    type={codingItem.type}
                    title={codingItem.title}
                    context={codingItem.context}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
