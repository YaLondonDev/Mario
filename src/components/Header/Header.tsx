import { useDispatch, useSelector } from 'react-redux';
import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { authLogoutRequested } from 'src/actions/authActions/auth.actions';
import { Logo, Menu, Button } from 'src/components';
import { authSelector } from 'src/selectors';

import styles from './header.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher';

const Header: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  const handleLogout = useCallback(() => {
    dispatch(authLogoutRequested());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__right}>
        <ThemeSwitcher />
        <Menu />
        {!auth.isLoggedIn && (
          <Button className="btn_base" type="button">
            <Link to="/signin">Авторизация</Link>
          </Button>
        )}
        {auth.isLoggedIn && (
          <Button onClick={handleLogout} className="btn_base" type="button">
            Выход
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
