import classNames from 'classnames';

import styles from './heading-default.module.scss';

interface IHeadingDefault {
  extraClass?: string;
  level: 2 | 3 | 4 | 5 | 6;
  type: 'section' | 'paragraph';
  text: string;
  color: 'lightBlue' | 'darkBlue';
  hasUppercase?: boolean;
}

export const HeadingDefault = ({
  extraClass,
  level,
  type,
  text,
  color,
  hasUppercase = false,
}: IHeadingDefault) => {
  const selectors = classNames(styles[type], styles[color], extraClass, {
    [styles.uppercase]: hasUppercase,
  });

  let heading:
    | undefined
    | React.ReactElement<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLHeadingElement>,
          HTMLHeadingElement
        >
      >;

  switch (level) {
    case 2:
      heading = <h2 className={selectors}>{text}</h2>;
      break;

    case 3:
      heading = <h3 className={selectors}>{text}</h3>;
      break;

    case 4:
      heading = <h4 className={selectors}>{text}</h4>;
      break;

    case 5:
      heading = <h5 className={selectors}>{text}</h5>;
      break;

    default:
      heading = <h6 className={selectors}>{text}</h6>;
  }

  return heading;
};
