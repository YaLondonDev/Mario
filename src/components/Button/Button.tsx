import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

type Props = {
  className: string,
  children: ReactNode,
  type: string
}

const Button: FC = ({ className, children, type }: Props) => (
  <button
    className={classNames(styles.btn, styles[className])}
    type={type ? 'submit' : 'button'}
  >
    { children}
  </button>
);

export default Button;
