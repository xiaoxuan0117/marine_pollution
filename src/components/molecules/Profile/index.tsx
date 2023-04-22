import React from "react";
import { useTranslation } from "react-i18next";

import trash from "../../../assets/trash.png";

import "./style.scss";

export interface ProfileProps {
  image: string;
  name: string;
  about: {
    title: string
    content: string
  }
}

export default function Profile(props: ProfileProps) {
  const { image, name, about } = props;
  const { t } = useTranslation(["category"]);
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="content">
          <div className="photo">
            <img src={image} alt="photo" />
          </div>
          <div className="name">{t(`${name}`)}</div>
          <div className="major info-box">
            <div className="title">{t(`${about.title}`)}</div>
            <div className="context">
              <div>{t(`${about.content}`)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
