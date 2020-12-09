import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import base from '../../styles/base.module.scss';
import styles from './leaderboard.module.scss';

const Leaderboard: FC = () => (
  <div className={base.wrapper}>
    <Helmet title="Leaderboard" />
    <div className={styles.leaderboard}>
      <div className={styles.leaderboard__content}>
        <h1 className={base.title}>Таблица лидеров</h1>
        <ul className={styles.leaderboard__list}>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
          <li className={styles.leaderboard__list_item}>
            <span className={styles.leaderboard__list_item_text}>
              1. User 1
            </span>
            <span className={styles.leaderboard__list_item_text}>
              1:55
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Leaderboard;
