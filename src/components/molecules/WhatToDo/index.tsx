import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

import CondingInfoItem from "../../atoms/WhatToDoItem";
import aiIcon from "../../../assets/aiIcon.svg";
import dataStructureIcon from "../../../assets/dataStructureIcon.svg";
import projectManageIcon from "../../../assets/projectManageIcon.svg";
import reactNativeIcon from "../../../assets/reactNativeIcon.svg";

import "./style.scss";

export default function WhatToDo() {
  const { t } = useTranslation(["otherInfo"]);

  const whatToDoItems = [
    {
      type: "noLittering",
      title: t("noLittering"),
      context: t("noLittering-context"),
      icon: "/assets/noLittering.png",
    },
    {
      type: "greenEnergy",
      title: t("greenEnergy"),
      context: t("greenEnergy-context"),
      icon: "/assets/greenEnergy.png",
    },
    {
      type: "recycle",
      title: t("recycle"),
      context: t("recycle-context"),
      icon: "/assets/recycle.png",
    },
  ];

  return (
    <div className="whatToDo-wrapper">
      <div className="whatToDo">
        <div className="title">{t("todo-title")}</div>
        <div className="items-section">
          <div className="items">
            {whatToDoItems &&
              whatToDoItems.map((whatToDoItem) => (
                <div className="item" key={whatToDoItem.type}>
                  <CondingInfoItem
                    type={whatToDoItem.type}
                    title={whatToDoItem.title}
                    context={whatToDoItem.context}
                    icon={whatToDoItem.icon}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
