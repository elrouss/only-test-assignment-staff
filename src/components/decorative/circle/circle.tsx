import classNames from 'classnames';

import React from 'react';

import styles from './circle.module.scss';

interface ICircleProps {
  extraClass?: string;
  children?: React.ReactElement;
  rotationDegree: number;
}

export const Circle = ({
  extraClass,
  children,
  rotationDegree,
}: ICircleProps) => {
  if (!children) {
    return <div className={classNames(styles.circle, extraClass)} />;
  }

  return (
    <div
      className={classNames(styles.circle, styles.tabs, extraClass)}
      style={{ transform: `rotate(-${rotationDegree}deg)` }}
    >
      {children}
    </div>
  );
};
