import React, { FC, useState, useEffect } from 'react';
import { getLeaderboard } from '../../api/leaderboard';
import { ratingFieldName } from '../../helpers/api';

import base from '../../styles/base.module.scss';
import styles from './leaderboard.module.scss';

const Leaderboard: FC = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard()
      .then((res) => res.json())
      .then((data) => {
        setLeaderboard(data);
      })
      .catch((err) => {
        console.log('getLeaderboard err - ', err);
      });
  }, []);
  return (
    <div className={base.wrapper}>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard__content}>
          <h1 className={base.title}>
            Таблица лидеров
          </h1>
          <ul className={styles.leaderboard__list}>
            {leaderboard.map((item) => (
              <li className={styles.leaderboard__list_item}>
                <span className={styles.leaderboard__list_item_text}>
                  {item.data.name}
                </span>
                <span className={styles.leaderboard__list_item_text}>
                  {item.data[ratingFieldName]}
                </span>
              </li>
            ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
