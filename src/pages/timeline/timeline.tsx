/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Tabs } from './components/tabs/tabs';
import styles from './timeline.module.scss';

import { ButtonDefault } from 'components/buttons/button-default';
import { Counter } from 'components/counter/counter';
import { Circle } from 'components/decorative/circle/circle';
import { Line } from 'components/decorative/line/line';
import { HeadingAccent } from 'components/headings/heading-accent/heading-accent';
import { Title } from 'components/headings/title/title';
import { Slider } from 'components/slider/slider';

import { ROTATION_DEGREE_STEP_TABS } from 'utils/constants';
import { timelineData } from 'utils/data/timeline';

export const TimelinePage = () => {
  const [tabNums, setTabNums] = useState({
    prev: 1,
    curr: 1, // We always begin with the 1st one
  });
  const [years, setYears] = useState<null | {
    prevBegin: number;
    prevEnd: number;

    currBegin: number;
    currEnd: number;
  }>(null);

  const [initialRotationDegree, setInitialRotationDegree] = useState(0);
  const [hasAppLoaded, setHasAppLoaded] = useState(false);

  const [history] = timelineData;
  const { title, data } = history;
  const { length } = data;
  const { dates } = data[tabNums.curr - 1];

  const stepRotation = ROTATION_DEGREE_STEP_TABS[length];

  const rotateTabs = (direction: 'left' | 'right') => {
    setTabNums({
      ...tabNums,
      curr: direction === 'left' ? tabNums.curr - 1 : tabNums.curr + 1,
    });
  };

  const handleCheckedButton = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTabNums({ ...tabNums, curr: Number(evt.target.value) });
  };

  const handleYers = () => {
    const keys = Object.keys(dates).map(Number);
    const first = keys[0];
    const last = keys[keys.length - 1];

    setYears({
      prevBegin: first,
      prevEnd: last,

      currBegin: first,
      currEnd: last,
    });
  };

  useEffect(() => {
    if (!hasAppLoaded) return;

    setTabNums({ ...tabNums, prev: tabNums.curr });
    handleYers();
    setInitialRotationDegree(
      tabNums.curr > tabNums.prev
        ? initialRotationDegree + (tabNums.curr - tabNums.prev) * stepRotation
        : initialRotationDegree -
            Math.abs(tabNums.curr - tabNums.prev) * stepRotation
    );
  }, [tabNums.curr]);

  useEffect(() => {
    handleYers();
    setHasAppLoaded(true);
  }, []);

  return (
    <section className={styles.timeline}>
      <div className={styles.outerWrapper}>
        <Line extraClass={styles.lineVertical} direction="vertical" />
        <Line extraClass={styles.lineHorizontal} direction="horizontal" />
        <div className={styles.innerWrapper}>
          <Title extraClass={styles.title} text={title} />
          <h2 className={styles.range}>
            <HeadingAccent
              level="none"
              text={years?.currBegin || ''}
              color="iris"
            />
            <HeadingAccent
              level="none"
              text={years?.currEnd || ''}
              color="fuchsia"
            />
          </h2>
          <div className={styles.pagination}>
            <Counter start={tabNums.curr} end={length} />
            <div className={styles.buttons}>
              <ButtonDefault
                type="button"
                direction="left"
                isDisabled={tabNums.curr === 1}
                onClick={() => rotateTabs('left')}
              />
              <ButtonDefault
                type="button"
                direction="right"
                isDisabled={tabNums.curr === length}
                onClick={() => rotateTabs('right')}
              />
            </div>
          </div>
          <div className={styles.circle}>
            <Circle tabsNumber={length} rotationDegree={initialRotationDegree}>
              <Tabs
                data={data}
                activeTabNumber={tabNums.curr}
                onChange={handleCheckedButton}
              />
            </Circle>
          </div>
          <div className={styles.slider}>
            <Slider facts={dates} />
          </div>
        </div>
      </div>
    </section>
  );
};
