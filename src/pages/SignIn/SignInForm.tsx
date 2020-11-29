import React, { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { TSignInPayload } from '../../actions/authActions/auth.types';
import { Button, Input } from '../../components';
import { TSignInFormProps } from './types';
import styles from './signin.module.scss';

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

  return (
    <form action="#" className={styles.form} onSubmit={handleSubmit}>
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
      <Link to="/signup">У меня нет аккаунта</Link>
    </form>
  );
};
