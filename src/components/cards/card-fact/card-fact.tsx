import React from 'react';

import styles from './card-fact.module.scss';

interface ICardFact {
  heading: React.ReactElement;
  text: React.ReactElement;
}

export const CardFact = ({ heading, text }: ICardFact) => (
  <div className={styles.wrapper}>
    {heading}
    {text}
  </div>
);
