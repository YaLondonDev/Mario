import React, { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getServiceIdYandex } from '../../actions/authActions/auth.actions';
import { TSignInPayload } from '../../actions/authActions/auth.types';
import { Button, Input } from '../../components';
import { TSignInFormProps } from './types';

import styles from './signinform.module.scss';
import yandexLogin from '../../assets/img/yandex.png';

const signInValidationSchema = Yup.object({
  login: Yup.string().required('Заполните поле'),
  password: Yup.string().required('Заполните поле'),
});

export const SignInForm: FC<TSignInFormProps> = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: signInValidationSchema,
    onSubmit: (data: TSignInPayload) => {
      if (typeof onSubmit === 'function') {
        onSubmit(data);
      }
    },
  });

  const yLogin = () => {
    dispatch(getServiceIdYandex());
  };

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <Input
        label="Логин"
        name="login"
        placeholder="Введите логин"
        type="text"
        onChange={handleChange}
        value={values.login}
        error={touched.login && errors.login}
      />
      <Input
        label="Пароль"
        name="password"
        placeholder="Введите пароль"
        type="password"
        onChange={handleChange}
        value={values.password}
        error={touched.password && errors.password}
      />
      <Button className="btn_submit" type="submit">
        <span>Войти</span>
      </Button>

      <div className={styles.yLogin}>
        <span className={styles.yLogin__text}>
          Войти с помощью
        </span>
        <button
          className={styles.yLogin__button}
          onClick={yLogin}
          type="button"
        >
          <img src={yandexLogin} alt="yndex login" />
        </button>
      </div>

      <Link to="/signup">У меня нет аккаунта</Link>
    </form>
  );
};
