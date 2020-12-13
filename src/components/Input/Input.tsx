import React, { FC } from 'react';

import { FormGroup } from 'src/components';

import styles from './input.module.scss';
import { Props } from './types';

const Input: FC<Props> = ({
  label,
  name,
  placeholder,
  type,
  error,
  onChange,
  value,
  ...props
}) => (
  <FormGroup>
    <label htmlFor={name} className={styles.label}>
      {label}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  </FormGroup>
);

export default Input;
