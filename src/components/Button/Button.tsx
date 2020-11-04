import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

type Props = {
  className: string,
  children: ReactNode,
  type?: 'button' | 'submit'
};

const Button: FC<Props> = ({ className, children, type }) => (
  <button
    className={classNames(styles.btn, styles[className])}
    // eslint-disable-next-line react/button-has-type
    type={type}
  >
    { children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
