import React from "react";

import "./style.scss";

interface CondingInfoItemProps {
  type: string;
  title: string;
  context: string;
}

export default function CondingInfoItem(props: CondingInfoItemProps) {
  const { type, title, context } = props;
  return (
    <div className="codingItem-wrapper">
      <div className="codingItem">
        <div className="title">{title}</div>
        <div className="icon">
          <img src={`src/assets/${type}.svg`} alt="" />
        </div>
        <div className="context">{context}</div>
      </div>
    </div>
  );
}
