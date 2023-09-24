import { nanoid } from 'nanoid';

import { memo } from 'react';

import styles from './slider.module.scss';

import { CardFact } from 'components/cards/card-fact/card-fact';
import { HeadingDefault } from 'components/headings/heading-default/heading-default';
import { ParagraphDefault } from 'components/paragraphs/paragraph-default';
import { Swiper, SwiperSlide } from 'components/swiper/swiper';

import { DEVICE_DIMENSIONS } from 'utils/constants';

interface ISliderProps {
  facts: { [key: string]: string | string[] };
}

export const Slider = memo(({ facts }: ISliderProps) => {
  const years = Object.keys(facts);

  const slides = years.map((date) => (
    <SwiperSlide key={nanoid()}>
      <CardFact
        heading={
          <HeadingDefault
            level={4}
            type="paragraph"
            text={date}
            color="lightBlue"
          />
        }
        text={<ParagraphDefault>{facts[date]}</ParagraphDefault>}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      breakpoints={{
        [DEVICE_DIMENSIONS.MOBILE_EXTRA_SMALL]: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slideNextClass: styles.nextSlide,
        },
        [DEVICE_DIMENSIONS.MOBILE_EXTRA_LARGE + 1]: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
        [DEVICE_DIMENSIONS.TABLET_ALBUM_ORIENTATION + 1]: {
          slidesPerView: 2,
        },
        [DEVICE_DIMENSIONS.DESKTOP_SMALL]: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
    >
      {slides}
    </Swiper>
  );
});
