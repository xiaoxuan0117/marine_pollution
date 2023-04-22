import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import Resolve from "../../atoms/Resolve";
import Detail from "../../atoms/Detail";

import "swiper/css";
import "swiper/css/scrollbar";

import "./style.scss";

export interface Item {
  title: string
  content: string
}

interface InfoProps {
  detailTitle: string;
  detail: Item[];
  resolve: string;
  method: Item[];
}

export default function Info(props: InfoProps) {
  const { detailTitle, detail, resolve, method } = props;
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
            <Detail detailTitle={detailTitle} detail={detail}/>
          </SwiperSlide>
          <SwiperSlide>
            <Resolve resolve={resolve} method={method}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
