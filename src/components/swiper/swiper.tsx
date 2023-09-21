/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

interface ISwiperProps {
  slidesPerView?: number;
  children: React.ReactNode;
}

export const Swiper = ({ children, slidesPerView, ...rest }: ISwiperProps) => {
  const swiperRef = useRef(null) as any;

  useEffect(() => {
    register();

    const params = {
      slidesPerView,
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
};

export const SwiperSlide = ({ children, ...rest }: ISwiperProps) => (
  <swiper-slide {...rest}>{children}</swiper-slide>
);
