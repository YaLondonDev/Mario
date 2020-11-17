import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
// @ts-ignore
import * as Yup from 'yup';
import { TSignUpFields } from './types';
import { Button, Input } from '../../components';
import styles from './signup.module.scss';

export const SignUpForm: FC = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
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
    onSubmit: (data: TSignUpFields) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <Input
        label="Имя"
        name="firstName"
        placeholder="Введите имя"
        type="text"
        onChange={handleChange}
        value={values.firstName}
        error={touched.firstName && errors.firstName}
      />
      <Input
        label="Фамилия"
        name="lastName"
        placeholder="Введите фамилия"
        type="text"
        onChange={handleChange}
        value={values.lastName}
        error={touched.lastName && errors.lastName}
      />
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
        label="Email"
        name="email"
        placeholder="Введите email"
        type="email"
        onChange={handleChange}
        value={values.email}
        error={touched.email && errors.email}
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
      <Input
        label="Телефон"
        name="phone"
        placeholder="Введите телефон"
        type="tel"
        onChange={handleChange}
        value={values.phone}
        error={touched.phone && errors.phone}
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
