import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import WorkItem from "../../molecules/WorkItem";
import WorkItemEnterprise from "../../molecules/WorkItemEnterprise";
import WorkItemTask from "../../molecules/WorkItemTask";

import "./style.scss";

interface WorksProps {
  worksRef: React.LegacyRef<HTMLDivElement>;
}
export default function Works(props: WorksProps) {
  const { t } = useTranslation(["works"]);
  const { worksRef } = props;
  return (
    <div className="works-wrapper" ref={worksRef}>
      <div className="works">
        <div className="content">
          <div className="title">{t("my-works")}</div>
          <div className="works-section">
            <Swiper
              spaceBetween={100}
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
            >
              <SwiperSlide>
                <WorkItem />
              </SwiperSlide>
              <SwiperSlide>
                <WorkItemEnterprise />
              </SwiperSlide>
              <SwiperSlide>
                <WorkItemTask />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
