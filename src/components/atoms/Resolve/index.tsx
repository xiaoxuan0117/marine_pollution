import React from "react";
import { useTranslation } from "react-i18next";


import { Item } from "../../molecules/Info";

import "swiper/css";

import "./style.scss";

interface ResolveProps {
  resolve: string;
  method: Item[];
}

export default function Resolve(props: ResolveProps) {
  const { resolve, method } = props;
  const { t } = useTranslation(["category"]);
  return (
    <div className="resolve-wrapper">
      <div className="resolve">
        <div className="item-title">{t("resolve-title")}</div>
        <div className="item-context">{t(`${resolve}`)}</div>
        <div className="method-section">
          <div className="methods">
            {method.map((item) => (
              <div key={item.title} className="method">
                <div className="title">{t(`${item.title}`)}</div>
                <div className="divided"></div>
                <div className="context">{t(`${item.content}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
