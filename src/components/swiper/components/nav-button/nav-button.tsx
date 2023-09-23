import React from 'react';

import styles from './nav-button.module.scss';

import { ArrowLeft } from 'assets/icons/arrows/arrow-left';
import { ArrowRight } from 'assets/icons/arrows/arrow-right';

interface INavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'previous' | 'next';
}

export const NavButton = ({ direction, onClick }: INavButtonProps) => (
  <button
    className={styles.button}
    type="button"
    aria-label={`Прокрутить слайдер ${
      direction === 'previous' ? 'назад' : 'вперед'
    }`}
    onClick={onClick}
  >
    {direction === 'previous' ? (
      <ArrowLeft color="blue" />
    ) : (
      <ArrowRight color="blue" />
    )}
  </button>
);
