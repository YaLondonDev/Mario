import React, { FC } from 'react';
import styles from './input.module.scss';

type Props = {
    label: string,
    name: string,
    placeholder: string,
    type: string,
}
const Input: FC<Props> = (props:Props) => {
  const {
    label, name, placeholder, type,
  } = props;
  return (
    <div className={styles.form_group}>
      <label htmlFor={name} className={styles.label}>
        { label }
        <input type={type} id={name} placeholder={placeholder} className={styles.input} />
      </label>
    </div>
  );
};

export default Input;
