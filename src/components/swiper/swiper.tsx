/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { register } from 'swiper/element/bundle';

import styles from './swiper.module.scss';

import { NavButton } from 'components/swiper/components/nav-button/nav-button';

interface ISwiperProps {
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView?: number | 'auto';
      spaceBetween?: number;
      slideNextClass?: string;
    };
  };
  children: React.ReactNode;
}

export const Swiper = ({ children, ...rest }: ISwiperProps) => {
  const swiperRef = useRef(null) as any;
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

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
  }, [children]);

  const checkPosition = useCallback(
    () =>
      setSlideConfig({
        isBeginning: swiperRef.current.swiper.isBeginning,
        isEnd: swiperRef.current.swiper.isEnd,
      }),
    []
  );

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    swiperInstance.on('slideChange', checkPosition);

    return () => {
      swiperInstance.off('slideChange', checkPosition);
    };
  }, []);

  const emptyBlock = <div className={styles.empty} />;

  return (
    <>
      {slideConfig.isBeginning ? (
        emptyBlock
      ) : (
        <NavButton
          extraClass={styles.button}
          direction="previous"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      )}
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
      {slideConfig.isEnd ? (
        emptyBlock
      ) : (
        <NavButton
          extraClass={styles.button}
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
