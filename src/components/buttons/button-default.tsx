import { nanoid } from 'nanoid';
import React from 'react';

import styles from './button-default.module.scss';

import vectorLeft from 'assets/icons/vector-left.svg';
import vectorRight from 'assets/icons/vector-right.svg';

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'radio';
  name: string;
  heading: React.ReactElement<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  >;
  number: number;
  isChecked: boolean;
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button';
  direction: 'left' | 'right';
  isDisabled?: boolean;
}

type TButtonProps = IRadio | IButton;

export const ButtonDefault = (props: TButtonProps) => {
  const { type } = props;

  if (type === 'radio') {
    const id = nanoid();
    const { name, heading, number, isChecked = false } = props;

    return (
      <div className={styles.radio}>
        <input
          className={styles.input}
          id={id}
          type="radio"
          name={name}
          defaultChecked={isChecked}
        />
        <label className={styles.label} htmlFor={id}>
          {number}
        </label>
        {heading}
      </div>
    );
  }

  const { direction, isDisabled = false } = props;

  return (
    <button
      className={styles.button}
      type="button"
      aria-label={
        direction === 'left'
          ? 'Прокрутить слайдер назад'
          : 'Прокрутить слайдер вперед'
      }
      disabled={isDisabled}
    >
      <img
        src={direction === 'left' ? vectorLeft : vectorRight}
        alt={direction === 'left' ? 'Стрелка влево' : 'Стрелка вправо'}
      />
    </button>
  );
};
