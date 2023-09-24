import { nanoid } from 'nanoid';

import React from 'react';

import styles from './bullet.module.scss';

interface IBulletProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  number: number;
  activeTabNum: number;
}

export const Bullet = ({
  name,
  number,
  activeTabNum,
  onChange,
}: IBulletProps) => {
  const id = nanoid();

  return (
    <div className={styles.bullet}>
      <input
        className={styles.input}
        id={id}
        type="radio"
        name={name}
        value={number}
        checked={activeTabNum === number}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id} />
    </div>
  );
};
