import React from "react";
import { useTranslation } from "react-i18next";
import {addNewLine} from "../../../util";

import "./style.scss";

export default function Banner() {
  const { t } = useTranslation(["banner"]);
  return (
    <div id="banner" className="banner-wrapper">
      <div className="banner">
        <div className="title">{t('title')}</div>
        <div className="subtitle">
          {addNewLine(t("intro"))}
          <br />
          {t("scroll")}
        </div>
      </div>
    </div>
  );
}
