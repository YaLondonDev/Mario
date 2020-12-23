import React, { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { TSignInPayload } from '../../actions/authActions/auth.types';
import { Button, Input } from '../../components';
import { TSignInFormProps } from './types';
// import { ApiService } from '../../services/api.service';
import styles from './signinform.module.scss';

const signInValidationSchema = Yup.object({
  login: Yup.string().required('Заполните поле'),
  password: Yup.string().required('Заполните поле'),
});

export const SignInForm: FC<TSignInFormProps> = ({ onSubmit }) => {
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
    console.log('yLogin');

    const urlYandexService = 'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id';

    fetch(urlYandexService, {
      method: 'GET',
      // @ts-ignore
      // RequestCredentials: 'include',
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('service_id - ', data.service_id);
        const CLIENT_ID = data.service_id;
        const redirectUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}`;

        document.location.href = redirectUrl;
      });
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
          Яндек
        </button>
      </div>

      <Link to="/signup">У меня нет аккаунта</Link>
    </form>
  );
};
