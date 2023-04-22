import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import EventItem from "../../molecules/EventItem";
import { events } from "../../../data/events";

import "./style.scss";

interface EventsProps {
  eventsRef: React.LegacyRef<HTMLDivElement>;
}
export default function Events(props: EventsProps) {
  const { t } = useTranslation(["events"]);
  const { eventsRef } = props;
  return (
    <div className="events-wrapper" ref={eventsRef}>
      <div className="events">
        <div className="content">
          <div className="title">{t("events")}</div>
          <div className="events-section">
            <Swiper
              spaceBetween={100}
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
            >
              {events.map((event, index) => {
                return (
                  <SwiperSlide>
                    <EventItem key={index} {...event} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
