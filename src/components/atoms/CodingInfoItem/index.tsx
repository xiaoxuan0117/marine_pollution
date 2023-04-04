import React from "react";

import "./style.scss";

interface CondingInfoItemProps {
  type: string;
  title: string;
  context: string;
  icon: string;
}

export default function CondingInfoItem(props: CondingInfoItemProps) {
  const { type, title, context, icon } = props;
  return (
    <div className="codingItem-wrapper">
      <div className="codingItem">
        <div className="title">{title}</div>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div className="context">{context}</div>
      </div>
    </div>
  );
}
