import React, { FC, AllHTMLAttributes } from 'react';
import styles from './input.module.scss';

type Props = {label: string} & AllHTMLAttributes<HTMLElement>

const Input: FC<Props> = ({
  label, name, placeholder, type,
}: Props) => (
  <div className={styles.form_group}>
    <label htmlFor={name} className={styles.label}>
      { label }
      <input type={type} id={name} placeholder={placeholder} className={styles.input} />
    </label>
  </div>
);

export default Input;
