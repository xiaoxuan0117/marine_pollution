import React from "react";
import { useTranslation } from "react-i18next";

import WorksHeader from "../../atoms/WorksHeader";

import "./style.scss";

export default function WorkItem() {
  const { t } = useTranslation(["works"]);
  return (
    <div className="workItem-wrapper">
      <div className="workItem">
        <WorksHeader
          title={t("music-title")}
          subtitle={t("music-subtitle")}
          context={t("music-context")}
        />
        <div className="images-section">
          <div className="images">
            <a href="#" className="r-and-b">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image"></div>
                </div>
              </div>
            </a>
            <a href="#" className="rap">
              <div className="imgbox">
                <div className="image-inner">
                  <div className="image"></div>
                </div>
              </div>
            </a>
            <a href="#" className="kpop">
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
