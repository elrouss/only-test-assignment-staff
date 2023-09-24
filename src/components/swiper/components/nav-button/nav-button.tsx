import classNames from 'classnames';

import React from 'react';

import styles from './nav-button.module.scss';

import { ArrowLeft } from 'assets/icons/arrows/arrow-left';
import { ArrowRight } from 'assets/icons/arrows/arrow-right';

interface INavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
  direction: 'previous' | 'next';
}

export const NavButton = ({
  extraClass,
  direction,
  onClick,
}: INavButtonProps) => (
  <button
    className={classNames(styles.button, extraClass)}
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
