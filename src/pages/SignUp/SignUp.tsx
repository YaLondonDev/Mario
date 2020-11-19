import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import base from '../../styles/base.module.scss';
import styles from './signup.module.scss';
import { Input, Button } from '../../components';
import { TSignUpPayload } from '../../actions/authActions/auth.types';
import { authRequest } from '../../actions/authActions/auth.actions';
import { TRootReducer } from '../../store';
import { TAuthReducerState } from '../../reducers/auth.reducer';

const SignIn: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authStore = useSelector<TRootReducer, TAuthReducerState>(
    (root) => root.auth,
  );
  const [form, setForm] = useState<TSignUpPayload>({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
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
      dispatch(authRequest(form));
    },
    [form],
  );

  return (
    <div className={base.wrapper}>
      <div className={styles.auth_form}>
        <div className={styles.auth_form__content}>
          <h1 className={base.title}>Регистрация</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Имя"
              name="firstName"
              placeholder="Введите имя"
              type="text"
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              label="Фамилия"
              name="secondName"
              placeholder="Введите фамилия"
              type="text"
              value={form.secondName}
              onChange={handleChange}
            />
            <Input
              label="Логин"
              name="login"
              placeholder="Введите логин"
              type="text"
              value={form.login}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              placeholder="Введите email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              label="Пароль"
              name="password"
              placeholder="Введите пароль"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
            <Input
              label="Телефон"
              name="phone"
              placeholder="Введите телефон"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <Button className="btn_submit" type="submit">
              <span>Зарегистрироватся</span>
            </Button>
            <Link to="/signin">У меня ecть аккаунт</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
