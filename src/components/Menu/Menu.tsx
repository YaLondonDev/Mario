import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './menu.module.scss';

const Menu: FC = () => (
  <ul className={styles.menu__list}>
    <li className={styles.menu__item}>
      <Link className={styles.menu__link} to="/feedback">
        Feedback
      </Link>
      <Link className={styles.menu__link} to="/leaderboard">
        Лидеры
      </Link>
    </li>
  </ul>
);

export default Menu;
