import React, { FC } from 'react';

import styles from './app.module.scss';
import GithubIcon from './github.svg';

export const App: FC = () => (
  <div className={styles.app}>
    <h1 className={styles.title}>There will be awesome game</h1>
    <GithubIcon className={styles.icon} />
  </div>
);
