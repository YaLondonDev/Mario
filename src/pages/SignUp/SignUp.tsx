import React, { FC } from 'react';
// @ts-ignore
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import base from '../../styles/base.module.scss';
import styles from './signup.module.scss';
import { Input, Button } from '../../components';
import { SignUpFields } from './types';

const SignUpForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Заполните поле'),
      lastName: Yup.string().required('Заполните поле'),
      login: Yup.string().required('Заполните поле'),
      email: Yup.string().email('Некорректный email').required('Заполните поле'),
      password: Yup.string().required('Заполните поле'),
      phone: Yup.string().required('Заполните поле'),
    }),
    onSubmit: (values: SignUpFields) => {
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
        label="Имя"
        name="firstName"
        placeholder="Введите имя"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
      />
      <Input
        label="Фамилия"
        name="lastName"
        placeholder="Введите фамилия"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.errors.lastName}
      />
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
        label="Email"
        name="email"
        placeholder="Введите email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
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
      <Input
        label="Телефон"
        name="phone"
        placeholder="Введите телефон"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
      />
      <Button className="btn_submit" type="submit">
        <span>Зарегистрироватся</span>
      </Button>
      <Link to="/signin">
        У меня ecть аккаунт
      </Link>
    </form>
  );
};

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
