/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react"

import { Pagination } from "swiper"
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react"
import CardTestimonial from "./CardTestimonial"

function SwiperTestimonial(props) {
  // eslint-disable-next-line react/prop-types
  const { data } = props
  const params = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    modules: [Pagination],
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      565: {
        slidesPerView: 1
      }
    },
    pagination: {
      type: "bullets",
      clickable: true,
      dynamicBullets: true
    },
    className: `pt-2 pb-5`
  }

  return (
    <Swiper {...params}>
      {data.map((item, index) => (
        <SwiperSlide key={index} className="p-4">
          <CardTestimonial data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperTestimonial
