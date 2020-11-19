import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import base from '../../styles/base.module.scss';
import styles from './signin.module.scss';
import { Input, Button } from '../../components';
import { TSignInPayload } from '../../actions/authActions/auth.types';
import { signInRequested } from '../../actions/authActions/auth.actions';
import { TRootReducer } from '../../store';
import { TAuthReducerState } from '../../reducers/auth.reducer';

const SignIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authStore = useSelector<TRootReducer, TAuthReducerState>(
    (root) => root.auth,
  );
  const [form, setForm] = useState<TSignInPayload>({
    login: '',
    password: '',
  });

  useEffect(() => {
    if (authStore.isLoggedIn) {
      history.push('/');
    }
  }, [authStore]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const { name, value } = event.target as HTMLInputElement;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form, setForm],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(signInRequested(form));
    },
    [form],
  );

  return (
    <div className={base.wrapper}>
      <div className={styles.auth_form}>
        <div className={styles.auth_form__content}>
          <h1 className={base.title}>Вход</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Логин"
              name="login"
              placeholder="Введите логин"
              type="text"
              onChange={handleChange}
            />
            <Input
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              type="password"
              onChange={handleChange}
            />
            <Button className="btn_submit" type="submit">
              <span>Войти</span>
            </Button>
            <Link to="/signup">У меня нет аккаунта</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
