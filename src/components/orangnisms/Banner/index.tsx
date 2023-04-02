import React, { LegacyRef } from "react";

import "./style.scss";

interface BannerProps {}

export default function Banner(props: BannerProps) {
  return (
    <div id="banner" className="banner-wrapper">
      <div className="banner">
        <div className="title">Hi! I'm Kate</div>
        <div className="subtitle">
          我是一位前端開發者，熱愛程式設計和網頁開發
          <br />
          請往下滾動了解更多!
        </div>
      </div>
    </div>
  );
}
