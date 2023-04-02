import React from "react";

import "./style.scss";

interface WorksHeaderProps {
  title: string;
  subtitle: string;
  context: string;
}

export default function WorksHeader(props: WorksHeaderProps) {
  const { title, subtitle, context } = props;
  return (
    <div className="worksHeader-wrapper">
      <div className="worksHeader">
        <div className="line"></div>
        <div className="work-content">
          <div className="work-title">{title}</div>
          <div className="work-subtitle">{subtitle}</div>
          <div className="work-context">{context}</div>
        </div>
      </div>
    </div>
  );
}
