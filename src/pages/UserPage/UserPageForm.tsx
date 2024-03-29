import React, { FC, useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from 'src/components';

import { TPropsInput, TPropsUserPage } from './types';
import styles from './userpage.module.scss';

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
      {label}
    </label>
    <div className={styles.inputWrapper}>
      {editMode ? (
        <input
          className={styles.input}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <span className={styles.value}>{value}</span>
      )}
      {error && <span className={styles.error}>{error}</span>}
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

  const { handleChange, values, errors, handleSubmit } = useFormik({
    initialValues: {
      firstName,
      lastName,
      login,
      email,
      phone,
    },
    enableReinitialize: true,
    validationSchema: userPageFormValidationSchema,
    onSubmit: () => {
      toggleEditMode(false);
    },
  });

  const handleModeChange = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      toggleEditMode(true);
    },
    [toggleEditMode],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        {!editable ? (
          <Button type="button" onClick={handleModeChange}>
            Изменить
          </Button>
        ) : (
          <Button type="submit">Сохранить</Button>
        )}
      </div>
    </form>
  );
};
