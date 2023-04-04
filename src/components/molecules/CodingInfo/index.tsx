import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

import CondingInfoItem from "../../atoms/CodingInfoItem";
import aiIcon from "../../../assets/aiIcon.svg";
import dataStructureIcon from "../../../assets/dataStructureIcon.svg";
import projectManageIcon from "../../../assets/projectManageIcon.svg";
import reactNativeIcon from "../../../assets/reactNativeIcon.svg";

import "./style.scss";

export default function CodingInfo() {
  const { t } = useTranslation(["otherInfo"]);

  const codingItems = [
    {
      type: "ai",
      title: t("ai"),
      context: t("ai-context"),
      icon: aiIcon,
    },
    {
      type: "data-structure",
      title: t("data-structure"),
      context: t("data-structure-context"),
      icon: dataStructureIcon,
    },
    {
      type: "project-manage",
      title: t("project-manage"),
      context: t("project-manage-context"),
      icon: projectManageIcon,
    },
    {
      type: "react-native",
      title: t("react-native"),
      context: t("react-native-context"),
      icon: reactNativeIcon,
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
                    icon={codingItem.icon}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
