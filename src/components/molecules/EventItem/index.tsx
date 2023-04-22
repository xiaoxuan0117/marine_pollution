import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import EventsHeader from "../../atoms/EventsHeader";

import "./style.scss";

interface EventItemProps {
  title: string;
  subtitle: string;
  context: string;
  images: string[];
}

export default function EventItem(props: EventItemProps) {
  const { title, subtitle, context, images } = props;
  const { t } = useTranslation(["events"]);

  const image01 = useRef<HTMLDivElement>(null);
  const image02 = useRef<HTMLDivElement>(null);
  const image03 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(image01.current, {
        scrollTrigger: {
          trigger: image01.current,
          start: "top 800px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
      gsap.to(image02.current, {
        scrollTrigger: {
          trigger: image02.current,
          start: "top 750px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
      gsap.to(image03.current, {
        scrollTrigger: {
          trigger: image03.current,
          start: "top 700px",
          toggleClass: "active",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // }
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <div className="eventItem-wrapper">
      <div className="eventItem">
        <EventsHeader
          title={t(`${title}`)}
          subtitle={t(`${subtitle}`)}
          context={t(`${context}`)}
        />
        <div className="images-section">
          <div className="images">
            {images.map((image, index) => {
              return (
                <div className="image" key={index}>
                  <div className="imgbox">
                    <div className="image-inner">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
