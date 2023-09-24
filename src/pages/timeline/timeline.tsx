/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

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
import { countDate } from 'utils/functions/calculations/count-date';
import { setElementsPosition } from 'utils/functions/calculations/set-elements-position';
import { TYearsCounter } from 'utils/types/TTimeline';

const circleDiameter = 530;

export const TimelinePage = () => {
  const [tabNums, setTabNums] = useState({
    prev: 1,
    curr: 1, // We always begin with the 1st one
  });
  const [years, setYears] = useState<null | TYearsCounter>(null);
  const [isCounterStartOn, setIsCounterStartOn] = useState(false);
  const [isCounterEndOn, setIsCounterEndOn] = useState(false);
  const counterYearsStartRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const counterYearsEndRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [initialRotationDegree, setInitialRotationDegree] = useState(0);

  const [hasAppLoaded, setHasAppLoaded] = useState(false);

  const [history] = timelineData;
  const { title, data } = history;
  const { length } = data;
  const { dates } = data[tabNums.curr - 1];

  const keys = Object.keys(dates).map(Number);
  const first = keys[0];
  const last = keys[keys.length - 1];

  const stepRotation = ROTATION_DEGREE_STEP_TABS[length];

  const rotateTabs = (direction: 'left' | 'right') => {
    setTabNums({
      ...tabNums,
      curr: direction === 'left' ? tabNums.curr - 1 : tabNums.curr + 1,
    });
  };

  const tabsPosition = setElementsPosition(length, circleDiameter);

  const handleCheckedButton = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTabNums({ ...tabNums, curr: Number(evt.target.value) });
  };

  useEffect(() => {
    if (!hasAppLoaded || !years?.currStart || !years.currEnd) return;

    setTabNums({ ...tabNums, prev: tabNums.curr });
    setYears({ ...years, nextStart: first, nextEnd: last });

    setInitialRotationDegree(
      tabNums.curr > tabNums.prev
        ? initialRotationDegree + (tabNums.curr - tabNums.prev) * stepRotation
        : initialRotationDegree -
            Math.abs(tabNums.curr - tabNums.prev) * stepRotation
    );
  }, [tabNums.curr]);

  useEffect(() => {
    if (!years) return;

    if (years.currStart < years.nextStart && !isCounterStartOn) {
      counterYearsStartRef.current = countDate(
        'increment',
        'currStart',
        setYears as React.Dispatch<React.SetStateAction<TYearsCounter>>
      );
      setIsCounterStartOn(true);
    }

    if (years.currStart > years.nextStart && !isCounterStartOn) {
      counterYearsStartRef.current = countDate(
        'decrement',
        'currStart',
        setYears as React.Dispatch<React.SetStateAction<TYearsCounter>>
      );
      setIsCounterStartOn(true);
    }

    if (counterYearsStartRef.current && years.currStart === years.nextStart) {
      clearInterval(counterYearsStartRef.current);
      setIsCounterStartOn(false);
    }

    if (years.currEnd < years.nextEnd && !isCounterEndOn) {
      counterYearsEndRef.current = countDate(
        'increment',
        'currEnd',
        setYears as React.Dispatch<React.SetStateAction<TYearsCounter>>
      );
      setIsCounterEndOn(true);
    }

    if (years.currEnd > years.nextEnd && !isCounterEndOn) {
      counterYearsEndRef.current = countDate(
        'decrement',
        'currEnd',
        setYears as React.Dispatch<React.SetStateAction<TYearsCounter>>
      );
      setIsCounterEndOn(true);
    }

    if (counterYearsEndRef.current && years.currEnd === years.nextEnd) {
      clearInterval(counterYearsEndRef.current);
      setIsCounterEndOn(false);
    }
  }, [years]);

  useEffect(() => {
    setYears({
      currStart: first,
      currEnd: last,

      nextStart: first,
      nextEnd: last,
    });

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
              text={years?.currStart || ''}
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
            <Circle rotationDegree={initialRotationDegree}>
              <Tabs
                data={data}
                activeTabNumber={tabNums.curr}
                position={tabsPosition}
                additionalRotationDegree={initialRotationDegree}
                onChange={handleCheckedButton}
              />
            </Circle>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider facts={dates} />
        </div>
      </div>
    </section>
  );
};
