import React, { FC } from 'react';
import base from '../../styles/base.module.scss';
import styles from './signup.module.scss';
import { SignUpForm } from './SignUpForm';

const SignUp: FC = () => (
  <div className={base.wrapper}>
    <div className={styles.auth_form}>
      <div className={styles.auth_form__content}>
        <h1 className={base.title}>Регистрация</h1>
        <SignUpForm />
      </div>
    </div>
  </div>
);

export default SignUp;
