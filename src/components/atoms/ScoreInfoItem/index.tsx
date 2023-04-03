import { type } from "os";
import React from "react";

import "./style.scss";

interface scoreInfoItemProps {
  type: string;
  title: string;
  context: string;
}

export default function ScoreInfoItem(props: scoreInfoItemProps) {
  const { type, title, context } = props;
  return (
    <div className="scoreItem-wrapper">
      <div className="scoreItem">
        <div className="title">{title}</div>
        <div className="icon">
          <img src={`src/assets/${type}.svg`} alt="" />
        </div>
        <div className="context">{context}</div>
      </div>
    </div>
  );
}
