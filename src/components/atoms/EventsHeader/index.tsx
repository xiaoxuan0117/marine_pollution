import React from "react";

import "./style.scss";

interface EventsHeaderProps {
  title: string;
  subtitle: string;
  context: string;
}

export default function EventsHeader(props: EventsHeaderProps) {
  const { title, subtitle, context } = props;
  return (
    <div className="eventsHeader-wrapper">
      <div className="eventsHeader">
        <div className="line"></div>
        <div className="event-content">
          <div className="event-title">{title}</div>
          <div className="event-subtitle">{subtitle}</div>
          <div className="event-context">{context}</div>
        </div>
      </div>
    </div>
  );
}
