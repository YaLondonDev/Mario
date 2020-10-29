import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu: FC = () => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to="/leaderboard">
          Таблица лидеров
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
