import React, { FC } from 'react';

import styles from './formgroup.module.scss';
import { Props } from './types';

const Input: FC<Props> = ({ children }) => (
  <div className={styles.form_group}>{children}</div>
);

export default Input;
