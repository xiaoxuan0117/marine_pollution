import React from "react";
import { useTranslation } from "react-i18next";

import my_photo from "../../../assets/my_photo.png";

import "./style.scss";

export default function Profile() {
  const { t } = useTranslation(["introduction"]);
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="content">
          <div className="photo">
            <img src={my_photo} alt="photo" />
          </div>
          <div className="name">{t("myName")}</div>
          <div className="major info-box">
            <div className="title">{t("major")}</div>
            <div className="context">
              <div>{t("school")}</div>
              <div>{t("major-content")}</div>
            </div>
          </div>
          <div className="work info-box">
            <div className="title">{t("work")}</div>
            <div className="context">
              <div>{t("work-content")}</div>
              <div>{t("duration")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
