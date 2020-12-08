import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import { Logo, Menu, Button } from '../index';
import { authLogoutRequested } from '../../actions/authActions/auth.actions';
import { loggedSelector } from '../../selector';

const Header: FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedSelector);

  const handleLogout = useCallback(() => {
    dispatch(authLogoutRequested());
  }, [authLogoutRequested]);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__right}>
        <Menu />
        {!isLoggedIn && (
          <Button className="btn_base" type="button">
            <Link to="/signin">Авторизация</Link>
          </Button>
        )}
        {isLoggedIn && (
          <Button onClick={handleLogout} className="btn_base" type="button">
            Выход
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
