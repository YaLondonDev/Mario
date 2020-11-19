import React, { FC } from 'react';
import styles from './input.module.scss';
import { FormGroup } from '../index';

import { Props } from './types';

const Input: FC<Props> = ({ label, name, placeholder, type, ...props }) => (
  <FormGroup>
    <label htmlFor={name} className={styles.label}>
      {label}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
    </label>
  </FormGroup>
);

export default Input;
