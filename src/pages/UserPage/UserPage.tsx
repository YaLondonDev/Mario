import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
// @ts-ignore
import * as Yup from 'yup';
import base from '../../styles/base.module.scss';
import styles from './userpage.module.scss';
import { Button } from '../../components';
import { PropsInput, PropsUserPage } from './types';

const EditField: FC<PropsInput> = ({
  label,
  name,
  value,
  onChange,
  error,
  editMode,
}) => (
  <div className={styles.field}>
    <label className={styles.label} htmlFor={name}>
      { label }
    </label>
    <div className={styles.inputWrapper}>
      {
        editMode
          ? (
            <input
              className={styles.input}
              type="text"
              name={name}
              value={value}
              onChange={onChange}
            />
          )
          : <span className={styles.value}>{value}</span>
        }
      { error ? <span className={styles.error}>{ error }</span> : null }
    </div>
  </div>
);

const EditForm: FC<PropsUserPage> = ({
  firstName,
  lastName,
  login,
  email,
  phone,
  password,
}) => {
  const [editable, toggleEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      login,
      email,
      phone,
      password,
    },
    validationSchema: Yup.object({
      firstName: Yup.string(),
      lastName: Yup.string(),
      login: Yup.string(),
      email: Yup.string().email('Невалидный email'),
      phone: Yup.string(),
      password: Yup.string(),
    }),
    // values: PropsUserPage
    onSubmit: () => {
      toggleEditMode(false);
      // console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      action="#"
      className={styles.form}
    >
      <EditField
        label="ИМЯ"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
        editMode={editable}
      />
      <EditField
        label="ФАМИЛИЯ"
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.errors.lastName}
        editMode={editable}
      />
      <EditField
        label="LOGIN"
        name="login"
        onChange={formik.handleChange}
        value={formik.values.login}
        error={formik.errors.login}
        editMode={editable}
      />
      <EditField
        label="EMAIL"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        editMode={editable}
      />
      <EditField
        label="ТЕЛЕФОН"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
        editMode={editable}
      />
      <EditField
        label="ПАРОЛЬ"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        editMode={editable}
      />

      { !editable ? (
        <Button type="button" onClick={() => toggleEditMode(true)}>
          Изменить
        </Button>
      ) : (
        <Button type="submit" onClick={() => formik.handleSubmit()}>
          Сохранить
        </Button>
      )}
    </form>
  );
};

const UserPage: FC = () => (
  <div className={base.wrapper}>
    <div className={styles.formWrapper}>
      <h1 className={base.title}>Личный кабинет</h1>
      <EditForm />
    </div>
  </div>
);

export default UserPage;
