import React, { useEffect, useLayoutEffect } from "react";

import circle_01 from "../../../assets/circle_01.svg";
import circleMask_01 from "../../../assets/circleMask_01.svg";
import circle_02 from "../../../assets/circle_02.svg";
import circle_03 from "../../../assets/circle_03.svg";
import circle_04 from "../../../assets/circle_04.svg";

import "./style.scss";

interface PinedBackProps {
  PinedBackRef: React.LegacyRef<HTMLDivElement> | undefined;
}

export default function PinedBack(props: PinedBackProps) {
  const { PinedBackRef } = props;
  return (
    <div className="pined-back" ref={PinedBackRef}>
      <div className="circle_02">
        <img src={circle_02} alt="circle" />
      </div>
      <div className="circle_01">
        <img src={circle_01} alt="circle" />
      </div>
      <div className="circle_04">
        <img src={circle_04} alt="circle" />
      </div>
      <div className="circle_03">
        <img src={circle_03} alt="circle" />
      </div>
    </div>
  );
}
