import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import base from '../../styles/base.module.scss';
import styles from './signup.module.scss';
import { Input, Button } from '../../components';

const SignIn: FC = () => (
  <div className={base.wrapper}>
    <div className={styles.auth_form}>
      <div className={styles.auth_form__content}>
        <h1 className={base.title}>Регистрация</h1>
        <form action="#" className={styles.form}>
          <Input label="Имя" name="first_name" placeholder="Введите имя" type="text" />
          <Input label="Фамилия" name="second_name" placeholder="Введите фамилия" type="text" />
          <Input label="Логин" name="login" placeholder="Введите логин" type="text" />
          <Input label="Email" name="email" placeholder="Введите email" type="email" />
          <Input label="Пароль" name="password" placeholder="Введите пароль" type="password" />
          <Input label="Телефон" name="phone" placeholder="Введите телефон" type="tel" />
          <Button className="btn_submit" type="submit">
            <span>Зарегистрироватся</span>
          </Button>
          <Link to="/signin">
            У меня ecть аккаунт
          </Link>
        </form>
      </div>
    </div>
  </div>
);

export default SignIn;
