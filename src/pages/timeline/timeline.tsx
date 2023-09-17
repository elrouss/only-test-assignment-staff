import styles from './timeline.module.scss';

import { ButtonDefault } from 'components/buttons/button-default';
import { Counter } from 'components/counter/counter';
import { Circle } from 'components/decorative/circle/circle';
import { Line } from 'components/decorative/line/line';
import { HeadingAccent } from 'components/headings/heading-accent/heading-accent';
import { Title } from 'components/headings/title/title';

export const TimelinePage = () => (
  <section className={styles.timeline}>
    <div className={styles.outerWrapper}>
      <Line extraClass={styles.lineVertical} direction="vertical" />
      <Line extraClass={styles.lineHorizontal} direction="horizontal" />
      <div className={styles.innerWrapper}>
        <Title extraClass={styles.title} text="Исторические даты" />
        <h2 className={styles.range}>
          <HeadingAccent level="none" text="2015" color="iris" />
          <HeadingAccent level="none" text="2022" color="fuchsia" />
        </h2>
        <div className={styles.pagination}>
          <Counter start={1} end={6} />
          <div className={styles.buttons}>
            <ButtonDefault type="button" direction="left" isDisabled />
            <ButtonDefault type="button" direction="right" />
          </div>
        </div>
        <Circle extraClass={styles.circle} />
      </div>
    </div>
  </section>
);
