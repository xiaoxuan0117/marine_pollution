import React from "react";
import { useTranslation } from "react-i18next";

import WorksHeader from "../../atoms/WorksHeader";

import "../WorkItem/style.scss";
import "./style.scss";

export default function WorkItemTask() {
  const { t } = useTranslation(["works"]);
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
                  <div className="image"></div>
                </div>
              </div>
            </a>
            <a href="#" className="home">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
