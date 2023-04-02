import React from "react";
import { useTranslation } from "react-i18next";

import WorksHeader from "../../atoms/WorksHeader";

import "../WorkItem/style.scss";
import "./style.scss";

export default function WorkItemEnterprise() {
  const { t } = useTranslation(["works"]);
  return (
    <div className="workItem-wrapper">
      <div className="workItem">
        <WorksHeader
          title={t("enterprise-title")}
          subtitle={t("enterprise-subtitle")}
          context={t("enterprise-context")}
        />
        <div className="images-section">
          <div className="images">
            <a href="#" className="banner">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image"></div>
                </div>
              </div>
            </a>
            <a href="#" className="comment">
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
