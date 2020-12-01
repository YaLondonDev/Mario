import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import { Logo, Menu, Button } from '../index';
import { authLogoutRequested } from '../../actions/authActions/auth.actions';
import { TAuthReducerState } from '../../reducers/reducers.types';
import { TRootReducer } from '../../store';

const Header: FC = () => {
  const dispatch = useDispatch();
  const authStore = useSelector<TRootReducer, TAuthReducerState>(
    (root) => root.auth,
  );

  const handleLogout = useCallback(() => {
    dispatch(authLogoutRequested());
  }, [authLogoutRequested]);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__right}>
        <Menu />
        {!authStore.isLoggedIn && (
          <Button className="btn_base" type="button">
            <Link to="/signin">Авторизация</Link>
          </Button>
        )}
        {authStore.isLoggedIn && (
          <Button onClick={handleLogout} className="btn_base" type="button">
            Выход
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
