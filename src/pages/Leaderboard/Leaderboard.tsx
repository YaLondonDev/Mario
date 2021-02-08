import React, { FC, useState, useEffect } from 'react';
import { LeaderboardApi } from 'src/api/leaderboard.api';
import { ratingFieldName } from '../../helpers/api';

import base from '../../styles/base.module.scss';
import styles from './leaderboard.module.scss';

const api = new LeaderboardApi();

const Leaderboard: FC = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(async () => {
    const leaderBoadData = await api.getLeaderboard();
    setLeaderboard(leaderBoadData.data);
  }, []);

  return (
    <div className={base.wrapper}>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard__content}>
          <h1 className={base.title}>
            Таблица лидеров
          </h1>
          {!leaderboard.length && <h4>Список пуст</h4>}
          {leaderboard.length ? (
            <ul className={styles.leaderboard__list}>
              {leaderboard.map((item: any) => (
                <li className={styles.leaderboard__list_item} key={item.data[ratingFieldName]}>
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
          ) : ''}
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;
