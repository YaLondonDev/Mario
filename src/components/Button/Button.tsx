import React, { FC, ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  className: string,
  children: ReactNode,
  type: string
}

const Button: FC<Props> = (props:Props) => {
  const { className, children, type } = props;
  return (
    <button
      className={`${styles.btn} ${styles[className]}`}
      type={type ? 'submit' : 'button'}
    >
      { children}
    </button>
  );
};

export default Button;
