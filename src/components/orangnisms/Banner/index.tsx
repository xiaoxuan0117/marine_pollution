import React from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

export default function Banner() {
  const { t } = useTranslation(["banner"]);
  return (
    <div id="banner" className="banner-wrapper">
      <div className="banner">
        <div className="title">Hi! I'm Kate</div>
        <div className="subtitle">
          {t("intro")}
          <br />
          {t("scroll")}
        </div>
      </div>
    </div>
  );
}
