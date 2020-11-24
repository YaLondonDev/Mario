import React, { FC } from 'react';
import base from '../../styles/base.module.scss';
import styles from './signin.module.scss';
import { SignInForm } from './SignInForm';

const SignIn: FC = () => (
  <div className={base.wrapper}>
    <div className={styles.auth_form}>
      <div className={styles.auth_form__content}>
        <h1 className={base.title}>Вход</h1>
        <SignInForm />
      </div>
    </div>
  </div>
);

export default SignIn;
