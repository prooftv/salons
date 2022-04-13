/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React from "react"

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "@components/CustomImage"
import CardRestaurant from "@components/CardRestaurant"
import CardRoom from "@components/CardRoom"
import CardPoster from "@components/CardPoster"
import CardProperty from "@components/CardProperty"

function SwiperComponent(props) {
  const breakpoints = []
  if (props.sm) {
    breakpoints[565] = {
      slidesPerView: props.sm
    }
  }
  if (props.md) {
    breakpoints[768] = {
      slidesPerView: props.md
    }
  }
  if (props.lg) {
    breakpoints[991] = {
      slidesPerView: props.lg
    }
  }
  if (props.xl) {
    breakpoints[1200] = {
      slidesPerView: props.xl
    }
  }
  if (props.xxl) {
    breakpoints[1400] = {
      slidesPerView: props.xxl
    }
  }
  if (props.xxxl) {
    breakpoints[1600] = {
      slidesPerView: props.xxxl
    }
  }
  const params = {
    className: props.className,
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    slidesPerView: props.perView ? props.perView : 1,
    effect: props.effect,
    allowTouchMove: props.allowTouchMove !== false,
    spaceBetween: props.spaceBetween ? props.spaceBetween : 0,
    centeredSlides: props.centeredSlides,
    roundLengths: props.roundLengths,
    loop: props.loop,
    speed: props.speed ? props.speed : 400,
    parallax: props.parallax,
    breakpoints,
    autoplay: props.autoplay,
    pagination: props.pagination !== undefined && {
      type: "bullets",
      clickable: true,
      dynamicBullets: true
    },
    navigation: props.navigation !== undefined
  }

  return props.data ? (
    <Swiper {...params}>
      {props.data.map((slide, index) =>
        props.simple ? (
          <SwiperSlide key={index}>
            <Image
              src={`/content/img/photo/${slide}`}
              layout="fill"
              className="bg-image"
              alt="Hero image"
              loading="eager"
            />
          </SwiperSlide>
        ) : (
          <SwiperSlide key={index} className="h-auto px-2">
            {props.cards && (
              <div className="w-100 h-100 hover-animate">
                <CardRoom data={slide.properties} />
              </div>
            )}
            {props.propertyCards && (
              <div className="w-100 h-100 hover-animate">
                <CardProperty data={slide} />
              </div>
            )}
            {props.imgCards && <CardPoster data={slide} />}
            {props.restaurantCards && (
              <div className="w-100 h-100 hover-animate">
                <CardRestaurant data={slide.properties} />
              </div>
            )}
          </SwiperSlide>
        )
      )}
    </Swiper>
  ) : (
    "loading"
  )
}

export default SwiperComponent
