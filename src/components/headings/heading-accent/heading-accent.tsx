import React from 'react';

import styles from './heading-accent.module.scss';

interface IHeadingAccent {
  level: 1 | 2 | 3;
  text: string;
  color: 'iris' | 'fuchsia';
}

export const HeadingAccent = ({ level, text, color }: IHeadingAccent) => {
  const selectors = `${styles.heading} ${styles[color]}`;

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

    default:
      heading = <h3 className={selectors}>{text}</h3>;
  }

  return heading;
};
