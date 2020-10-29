import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './signin.module.scss';
import { Input, Button } from '../../components';

const SignIn: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.auth_form}>
      <div className={styles.auth_form__content}>
        <h2 className={styles.title}>Вход</h2>
        <form action="#" className={styles.form}>
          <Input label="Логин" name="login" placeholder="Введите логин" type="text" />
          <Input label="Пароль" name="password" placeholder="Введите пароль" type="password" />
          <Button className="btn_submit" type="submit">
            <span>Войти</span>
          </Button>
          <Link to="/signup">
            У меня нет аккаунта
          </Link>
        </form>
      </div>
    </div>
  </div>
);

export default SignIn;
