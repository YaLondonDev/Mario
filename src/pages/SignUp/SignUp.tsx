import React, { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TSignUpPayload } from '../../actions/authActions/auth.types';
import { authRequest } from '../../actions/authActions/auth.actions';
import base from '../../styles/base.module.scss';
import { loggedSelector } from '../../selector';
import { Meta } from '../../components/Meta';
import { SignUpForm } from './SignUpForm';
import styles from './signup.module.scss';

const SignUp: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedSelector);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  const handleSubmit = useCallback(
    (form: TSignUpPayload) => {
      dispatch(authRequest(form));
    },
    [dispatch],
  );

  return (
    <div className={base.wrapper}>
      <Meta title="SignUp" />
      <div className={styles.auth_form}>
        <div className={styles.auth_form__content}>
          <h1 className={base.title}>Регистрация</h1>
          <SignUpForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
