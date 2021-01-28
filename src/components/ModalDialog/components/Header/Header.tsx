import React, { FC } from 'react';

import styles from './header.module.scss';

type THeader = {
  children: React.ReactNode;
};

export const Header: FC<THeader> = ({ children }) => (
  <div className={styles.header}>
    <h2>{children}</h2>
  </div>
);
