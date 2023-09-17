import classNames from 'classnames';

import styles from './line.module.scss';

interface ILineProps {
  extraClass?: string;
  direction: 'vertical' | 'horizontal';
}

export const Line = ({ extraClass, direction }: ILineProps) => (
  <div className={classNames(styles[direction], extraClass)} />
);
