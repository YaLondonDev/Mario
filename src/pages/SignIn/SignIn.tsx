import React, { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequested } from '../../actions/authActions/auth.actions';
import { TSignInPayload } from '../../actions/authActions/auth.types';
import base from '../../styles/base.module.scss';
import { loggedSelector } from '../../selector';
import { Meta } from '../../components/Meta';
import styles from './signin.module.scss';
import { SignInForm } from './SignInForm';

const SignIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedSelector);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  const handleSubmit = useCallback(
    (form: TSignInPayload) => {
      dispatch(signInRequested(form));
    },
    [dispatch],
  );

  return (
    <div className={base.wrapper}>
      <Meta title="SignIn" />
      <div className={styles.auth_form}>
        <div className={styles.auth_form__content}>
          <h1 className={base.title}>Вход</h1>
          <SignInForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
