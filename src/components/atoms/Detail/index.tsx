import React from "react";
import { useTranslation } from "react-i18next";

import { Item } from "../../molecules/Info";

import "swiper/css";
import "swiper/css/scrollbar";

import "./style.scss";

interface DetailProps {
  detailTitle: string;
  detail: Item[];
}

export default function Detail(props: DetailProps) {
  const { detailTitle, detail } = props;
  const { t } = useTranslation(["category"]);

  return (
    <div className="detailItem-wrapper">
      <div className="detailItem">
        {detail.map((item) => (
          <div key={item.title} className="detail">
            <div className="title">{t(`${item.title}`)}</div>
            <div className="context">{t(`${item.content}`)}</div>
          </div>
        ))}
      </div>
      <div className="item-title">
        {t(`${detailTitle}`)}
        <div className="swipe">{t("swipe-to-right")}</div>
      </div>
    </div>
  );
}
