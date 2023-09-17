import React from 'react';

import styles from './paragraph-default.module.scss';

export const ParagraphDefault = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className={styles.paragraph}>{children}</p>;
