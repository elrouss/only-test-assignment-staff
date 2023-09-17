import classNames from 'classnames';

import styles from './circle.module.scss';

interface ICirclePrios {
  extraClass?: string;
}

export const Circle = ({ extraClass }: ICirclePrios) => (
  <div className={classNames(styles.circle, extraClass)} />
);
