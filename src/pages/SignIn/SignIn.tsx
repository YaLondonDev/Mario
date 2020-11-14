import React, { FC } from 'react';
// @ts-ignore
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import base from '../../styles/base.module.scss';
import styles from './signin.module.scss';
import { Input, Button } from '../../components';
import { SignInFields } from './types';

const SignInForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().required('Заполните поле'),
      password: Yup.string().required('Заполните поле'),
    }),
    onSubmit: (values: SignInFields, { setErrors }) => {
      setErrors({
        login: 'Ошибка с сервера',
        password: 'Ошибка с сервера',
      });
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={formik.handleSubmit}
    >
      <Input
        label="Логин"
        name="login"
        placeholder="Введите логин"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
        error={formik.errors.login}
      />
      <Input
        label="Пароль"
        name="password"
        placeholder="Введите пароль"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button className="btn_submit" type="submit">
        <span>Войти</span>
      </Button>
      <Link to="/signup">
        У меня нет аккаунта
      </Link>
    </form>
  );
};

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
