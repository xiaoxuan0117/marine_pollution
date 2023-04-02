import React, { useEffect, useLayoutEffect } from "react";

import circle_01 from "../../../assets/circle_01.svg";
import circleMask_01 from "../../../assets/circleMask_01.svg";
import circle_02 from "../../../assets/circle_02.svg";
import circle_03 from "../../../assets/circle_03.svg";
import circle_04 from "../../../assets/circle_04.svg";

import "./style.scss";

interface PinedBackProps {
  pinedBackRef: React.LegacyRef<HTMLDivElement> | undefined;
  circlesRef: React.LegacyRef<HTMLDivElement>[];
}

export default function PinedBack(props: PinedBackProps) {
  const { pinedBackRef, circlesRef } = props;
  return (
    <div className="pined-back" ref={pinedBackRef}>
      <div className="circle_02" ref={circlesRef[1]}>
        <img src={circle_02} alt="circle" />
      </div>
      <div className="circle_01" ref={circlesRef[0]}>
        <img src={circle_01} alt="circle" />
      </div>
      <div className="circle_04" ref={circlesRef[3]}>
        <img src={circle_04} alt="circle" />
      </div>
      <div className="circle_03" ref={circlesRef[2]}>
        <img src={circle_03} alt="circle" />
      </div>
    </div>
  );
}
