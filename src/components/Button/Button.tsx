import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

import { Props } from './types';

const Button: FC<Props> = ({
  className,
  children,
  type,
  onClick,
  ...props
}) => (
  <button
    className={classNames(styles.btn, styles[className])}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
