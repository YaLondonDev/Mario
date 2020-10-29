import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo, Menu, Button } from '../index';
import styles from './header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <Logo />
    <div className={styles.header__right}>
      <Menu />
      <Button className="btn_base">
        <Link to="/signin">Авторизация</Link>
      </Button>
    </div>
  </header>
);

export default Header;
