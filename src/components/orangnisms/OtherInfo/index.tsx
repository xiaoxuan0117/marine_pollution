import React from "react";

import "./style.scss";
import CodingInfo from "../../molecules/CodingInfo";
import ScoreInfo from "../../molecules/ScoreInfo";

export default function OtherInfo() {
  return (
    <div className="other-wrapper">
      <div className="other">
        <CodingInfo />
        <ScoreInfo />
      </div>
    </div>
  );
}
