import React, { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Button, Input } from '../../components';
import { TFeedbackFormProps, TFeedbackPayload } from './types';

import styles from './feedback.module.scss';

const feedbackValidationSchema = Yup.object({
  userName: Yup.string().required('Заполните поле'),
  email: Yup.string().email(),
  message: Yup.string().required('Заполните поле'),
});

export const FeedbackForm: FC<TFeedbackFormProps> = ({ onSubmit }) => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      message: '',
    },
    validationSchema: feedbackValidationSchema,
    onSubmit: (data: TFeedbackPayload) => {
      if (typeof onSubmit === 'function') {
        onSubmit(data);
      }
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
        name="userName"
        placeholder="Введите имя"
        type="text"
        onChange={handleChange}
        value={values.userName}
        error={touched.userName && errors.userName}
      />
      <Input
        label="E-mail"
        name="email"
        placeholder="Введите email"
        type="email"
        onChange={handleChange}
        value={values.email}
        error={touched.email && errors.email}
      />
      <Input
        label="Сообщение"
        name="message"
        placeholder="Введите сообщение"
        type="text"
        onChange={handleChange}
        value={values.message}
        error={touched.message && errors.message}
      />
      <Button className="btn_submit" type="submit">
        <span>Отправить</span>
      </Button>
    </form>
  );
};
