import classNames from 'classnames';

import React from 'react';

import styles from './circle.module.scss';

interface ICircleProps {
  extraClass?: string;
  children?: React.ReactElement;
  tabsNumber?: number;
  rotationDegree: number;
}

export const Circle = ({
  extraClass,
  children,
  tabsNumber,
  rotationDegree,
}: ICircleProps) => {
  if (!children) {
    return <div className={classNames(styles.circle, extraClass)} />;
  }

  let tabs: undefined | string;

  switch (tabsNumber) {
    case 2:
      tabs = 'tabs_2';
      break;

    case 3:
      tabs = 'tabs_3';
      break;

    case 4:
      tabs = 'tabs_4';
      break;

    case 5:
      tabs = 'tabs_5';
      break;

    default:
      tabs = 'tabs_6';
  }

  return (
    <div
      className={classNames(
        styles.circle,
        styles.tabs,
        styles[tabs],
        extraClass
      )}
      style={{ transform: `rotate(-${rotationDegree}deg)` }}
    >
      {children}
    </div>
  );
};
