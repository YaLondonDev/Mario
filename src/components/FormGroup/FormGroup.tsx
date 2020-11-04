import React, { FC, ReactNode } from 'react';
import styles from './formgroup.module.scss';

type Props = {
    children: ReactNode
}

const Input: FC<Props> = ({ children }) => (
  <div className={styles.form_group}>
    {children}
  </div>
);

export default Input;
