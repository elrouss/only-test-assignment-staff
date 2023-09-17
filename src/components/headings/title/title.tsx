import classNames from 'classnames';

import styles from './title.module.scss';

interface ITitleProps {
  extraClass?: string;
  text: string;
}

export const Title = ({ text, extraClass }: ITitleProps) => (
  <h1 className={classNames(styles.title, extraClass)}>{text}</h1>
);
