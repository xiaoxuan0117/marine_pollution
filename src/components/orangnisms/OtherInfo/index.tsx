import React from "react";

import "./style.scss";
import WhatToDo from "../../molecules/WhatToDo";
import Organization from "../../molecules/Organization";

export default function OtherInfo() {
  return (
    <div className="other-wrapper">
      <div className="other">
        <WhatToDo />
        <Organization />
      </div>
    </div>
  );
}
