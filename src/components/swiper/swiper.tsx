/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { register } from 'swiper/element/bundle';

import styles from './swiper.module.scss';

import { NavButton } from 'components/swiper/components/nav-button/nav-button';

interface ISwiperProps {
  slidesPerView?: number;
  children: React.ReactNode;
}

export const Swiper = ({ children, ...rest }: ISwiperProps) => {
  const swiperRef = useRef(null) as any;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidersNum, setSlidersNum] = useState(0);

  useEffect(() => {
    register();
  }, []);

  useEffect(() => {
    const params = {
      injectStyles: [
        `
        :host {
          max-width: 1280px;
          margin-left: 0;
          margin-right: 0;
        }
        `,
      ],
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();

    setSlidersNum(
      Math.floor(
        swiperRef.current.swiper.slides.length / (rest.slidesPerView || 1) + 1
      )
    );
  }, [children]);

  const updateIndex = useCallback(
    () => setCurrentSlide(swiperRef.current.swiper.realIndex),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);

  const emptyBlock = <div className={styles.empty} />;

  return (
    <>
      {currentSlide === 0 ? (
        emptyBlock
      ) : (
        <NavButton
          direction="previous"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      )}
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
      {currentSlide === slidersNum ? (
        emptyBlock
      ) : (
        <NavButton
          direction="next"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      )}
    </>
  );
};

export const SwiperSlide = ({ children, ...rest }: ISwiperProps) => (
  <swiper-slide {...rest}>{children}</swiper-slide>
);
