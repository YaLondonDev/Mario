import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo: FC = () => (
  <Link className={styles.logo} to="/">
    YaLondonDev
  </Link>
);

export default Logo;
