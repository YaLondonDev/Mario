import React, { FC } from 'react';

import styles from './footer.module.scss';

type TFooter = {
  children: React.ReactNode;
};

export const Footer: FC<TFooter> = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);
