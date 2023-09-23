import { nanoid } from 'nanoid';

import { CardFact } from 'components/cards/card-fact/card-fact';
import { HeadingDefault } from 'components/headings/heading-default/heading-default';
import { ParagraphDefault } from 'components/paragraphs/paragraph-default';
import { Swiper, SwiperSlide } from 'components/swiper/swiper';

interface ISliderProps {
  facts: { [key: string]: string | string[] };
}

export const Slider = ({ facts }: ISliderProps) => {
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

  return <Swiper slidesPerView={3}>{slides}</Swiper>;
};
