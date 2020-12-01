import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';
import { Props } from './types';

const Button: FC<Props> = ({
  className,
  children,
  type = 'button',
  onClick,
  ...props
}) => (
  <button
    className={classNames(styles.btn, styles[className])}
    type={type}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
