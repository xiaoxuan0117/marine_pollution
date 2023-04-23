import React from "react";

import "./style.scss";

interface organizationItemProps {
  type: string;
  title: string;
  context: string;
  href: string;
}

export default function OrganizationItem(props: organizationItemProps) {
  const { type, title, context, href } = props;
  return (
    <div className="organizationItem-wrapper">
      <div className="organizationItem">
        <a href={href} target="_blank">
          <div className="title">
            <span>{title}</span>
          </div>
        </a>
        <div className="context">{context}</div>
      </div>
    </div>
  );
}
