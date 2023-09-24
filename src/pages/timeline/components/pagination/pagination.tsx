import { nanoid } from 'nanoid';

import React from 'react';

import styles from './pagination.module.scss';

import { Bullet } from 'components/pagination/bullet/bullet';

interface IPaginationProps {
  totalNumTabs: number;
  activeTabNum: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Pagination = ({
  totalNumTabs,
  activeTabNum,
  onChange,
}: IPaginationProps) => {
  const bullets = [];

  for (let i = 1; i <= totalNumTabs; i += 1) {
    bullets.push(
      <Bullet
        key={nanoid()}
        name="slider"
        number={i}
        activeTabNum={activeTabNum}
        onChange={onChange}
      />
    );
  }

  return <div className={styles.bullets}>{bullets}</div>;
};
