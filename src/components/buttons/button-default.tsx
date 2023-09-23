import { nanoid } from 'nanoid';
import React from 'react';

import styles from './button-default.module.scss';

import { ArrowLeft } from 'assets/icons/arrows/arrow-left';
import { ArrowRight } from 'assets/icons/arrows/arrow-right';

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
  activeTab: number;
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
    const { name, heading, number, activeTab, onChange } = props;

    return (
      <div className={styles.radio}>
        <input
          className={styles.input}
          id={id}
          type="radio"
          name={name}
          value={number}
          checked={activeTab === number}
          onChange={onChange}
        />
        <label className={styles.label} htmlFor={id}>
          {number}
        </label>
        {heading}
      </div>
    );
  }

  const { direction, isDisabled = false, onClick } = props;

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
      onClick={onClick}
    >
      {direction === 'left' ? (
        <ArrowLeft color="gray" />
      ) : (
        <ArrowRight color="gray" />
      )}
    </button>
  );
};
