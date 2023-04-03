import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import ExperienceItem from "../../atoms/ExperienceItem";
import SkillItem from "../../atoms/SkillItem";

import "swiper/css";
import "swiper/css/scrollbar";
import "./style.scss";

export default function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          spaceBetween={100}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
            <SkillItem />
          </SwiperSlide>
          <SwiperSlide>
            <ExperienceItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
