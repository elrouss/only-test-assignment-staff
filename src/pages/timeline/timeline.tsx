import { nanoid } from 'nanoid';

import styles from './timeline.module.scss';

import { ButtonDefault } from 'components/buttons/button-default';
import { Counter } from 'components/counter/counter';
import { Circle } from 'components/decorative/circle/circle';
import { Line } from 'components/decorative/line/line';
import { HeadingAccent } from 'components/headings/heading-accent/heading-accent';
import { HeadingDefault } from 'components/headings/heading-default/heading-default';
import { Title } from 'components/headings/title/title';

import { timelineData } from 'utils/data/timeline';

export const TimelinePage = () => {
  const [history] = timelineData;
  const { title, data } = history;
  const { length } = data;

  const tabs = data.map(({ heading }, i) => (
    <div key={nanoid()}>
      <ButtonDefault
        type="radio"
        name="history"
        heading={
          <HeadingDefault
            level={3}
            type="section"
            text={heading}
            color="darkBlue"
          />
        }
        number={i + 1}
        isChecked={i === 0}
      />
    </div>
  ));

  return (
    <section className={styles.timeline}>
      <div className={styles.outerWrapper}>
        <Line extraClass={styles.lineVertical} direction="vertical" />
        <Line extraClass={styles.lineHorizontal} direction="horizontal" />
        <div className={styles.innerWrapper}>
          <Title extraClass={styles.title} text={title} />
          <h2 className={styles.range}>
            <HeadingAccent level="none" text="2015" color="iris" />
            <HeadingAccent level="none" text="2022" color="fuchsia" />
          </h2>
          <div className={styles.pagination}>
            <Counter start={1} end={length} />
            <div className={styles.buttons}>
              <ButtonDefault type="button" direction="left" isDisabled />
              <ButtonDefault type="button" direction="right" />
            </div>
          </div>
          <div className={styles.circle}>
            <Circle tabsNumber={length}>{tabs}</Circle>
          </div>
        </div>
      </div>
    </section>
  );
};
