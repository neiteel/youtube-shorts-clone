'use client';
import React, { useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from 'react-use';
import Player from '@/components/Player';

function Carousel({ items }) {
  const [playing, setPlaying] = useState('video-0');
  const { width, height } = useWindowSize();

  return (
    <Swiper
      modules={[Mousewheel]}
      mousewheel={true}
      simulateTouch={false}
      style={{ height: `calc(${height}px - 3rem)` }}
      direction={'vertical'}
      onSlideChange={(swiper) => {
        const activeVideo = `video-${swiper.activeIndex}`;
        setPlaying(activeVideo);
      }}
      className="mySwiper relative z-30 h-full w-full"
    >
      {items.map((item, index) => (
        <SwiperSlide key={`video-${index}`} className="overflow-hidden">
          <Player
            id={`video-${index}`}
            data={item}
            playing={playing === `video-${index}`}
          />
          <img
            className={`absolute inset-0 z-20 h-full w-full object-cover`}
            src={item.cover}
            alt="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Carousel;
