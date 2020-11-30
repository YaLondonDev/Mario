import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TPropsInput, TPropsUserPage } from './types';
import styles from './userpage.module.scss';
import { Button } from '../../components';

const userPageFormValidationSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  login: Yup.string(),
  email: Yup.string().email('Невалидный email'),
  phone: Yup.string(),
  password: Yup.string(),
});

const EditField: FC<TPropsInput> = ({
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

export const UserPageForm: FC<TPropsUserPage> = ({
  firstName,
  lastName,
  login,
  email,
  phone,
}) => {
  const [editable, toggleEditMode] = useState(false);

  const {
    handleChange,
    values,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName,
      lastName,
      login,
      email,
      phone,
    },
    enableReinitialize: true,
    validationSchema: userPageFormValidationSchema,
    onSubmit: (value: TPropsUserPage) => {
      toggleEditMode(false);
      console.log(JSON.stringify(value, null, 2));
    },
  });

  const handleModeChange = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    toggleEditMode(true);
  };

  return (
    <form
      action="#"
      className={styles.form}
    >
      <EditField
        label="ИМЯ"
        name="firstName"
        onChange={handleChange}
        value={values.firstName}
        error={errors.firstName}
        editMode={editable}
      />
      <EditField
        label="ФАМИЛИЯ"
        name="lastName"
        onChange={handleChange}
        value={values.lastName}
        error={errors.lastName}
        editMode={editable}
      />
      <EditField
        label="LOGIN"
        name="login"
        onChange={handleChange}
        value={values.login}
        error={errors.login}
        editMode={editable}
      />
      <EditField
        label="EMAIL"
        name="email"
        onChange={handleChange}
        value={values.email}
        error={errors.email}
        editMode={editable}
      />
      <EditField
        label="ТЕЛЕФОН"
        name="phone"
        onChange={handleChange}
        value={values.phone}
        error={errors.phone}
        editMode={editable}
      />
      <div className={styles.btnWrap}>
        { !editable ? (
          <Button type="button" onClick={handleModeChange}>
            Изменить
          </Button>
        ) : (
          <Button type="submit" onClick={() => handleSubmit()}>
            Сохранить
          </Button>
        )}
      </div>
    </form>
  );
};
