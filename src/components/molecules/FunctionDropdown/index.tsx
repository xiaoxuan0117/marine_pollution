import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import i18n from "../../../util/i18n";

import functionDropdown from "../../../assets/function.png";

import "./style.scss";

export default function FunctionDropdown(props: {
  setLng: Dispatch<SetStateAction<string>>;
}) {
  const { t } = useTranslation(["functionDropdown"]);
  const [isOpen, setIsOpen] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: { scale: 0 },
  }));

  const handleDropdown = () => {
    api.start({
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
      },
      config: { tension: 120, friction: 14 },
    });
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const ingChange = (lng: string) => {
    props.setLng(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Element;
      const preventList = [
        "function-button",
        "zh option",
        "en option",
        "scroll-top",
      ];
      if (isOpen && !preventList.includes(target.classList.value)) {
        api.start({
          from: {
            scale: 1,
          },
          to: {
            scale: 0,
          },
          config: { tension: 100, friction: 20 },
        });
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", (event) => handler(event));
  });
  return (
    <div className="function-wrapper">
      <div className="function">
        <img
          className="function-button"
          src={functionDropdown}
          alt="function"
          onClick={handleDropdown}
        />
        <animated.div className="dropdown-wrapper" style={{ ...springs }}>
          <div className="dropdown">
            <div className="scroll-top" onClick={handleScrollToTop}>
              {t("scroll-top")}
            </div>
            <div className="lng">
              <div className="title">{t("lng-setting")}</div>
              <div className="options">
                <div className="en option" onClick={() => ingChange("en")}>
                  {t("en")}
                  <div className="choose"></div>
                </div>
                <div className="zh option" onClick={() => ingChange("zh")}>
                  {t("zh")}
                  <div className="choose"></div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
