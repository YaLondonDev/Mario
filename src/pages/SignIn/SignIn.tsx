import React, { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TSignInPayload } from '../../actions/authActions/auth.types';
import { signInRequested } from '../../actions/authActions/auth.actions';
import { authSelector } from '../../selectors';
import { SignInForm } from './SignInForm';

import styles from './signin.module.scss';
import base from '../../styles/base.module.scss';

const SignIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.isLoggedIn) {
      history.push('/');
    }
  }, [auth.isLoggedIn, history]);

  const handleSubmit = useCallback(
    (form: TSignInPayload) => {
      dispatch(signInRequested(form));
    },
    [dispatch],
  );

  return (
    <div className={base.wrapper}>
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
