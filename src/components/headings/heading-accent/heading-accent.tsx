import classNames from 'classnames';

import React from 'react';

import styles from './heading-accent.module.scss';

interface IHeadingAccent {
  extraClass?: string;
  level: 1 | 2 | 3 | 'none';
  text: string;
  color: 'iris' | 'fuchsia';
}

export const HeadingAccent = ({
  extraClass,
  level,
  text,
  color,
}: IHeadingAccent) => {
  const selectors = classNames(styles.heading, styles[color], extraClass);

  let heading:
    | undefined
    | React.ReactElement<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLHeadingElement>,
          HTMLHeadingElement
        >
      >;

  switch (level) {
    case 1:
      heading = <h1 className={selectors}>{text}</h1>;
      break;

    case 2:
      heading = <h2 className={selectors}>{text}</h2>;
      break;

    case 3:
      heading = <h3 className={selectors}>{text}</h3>;
      break;

    default:
      heading = <span className={`${selectors} ${styles.span}`}>{text}</span>;
  }

  return heading;
};
