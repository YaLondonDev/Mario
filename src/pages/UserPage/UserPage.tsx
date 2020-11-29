import React, { FC } from 'react';
import base from '../../styles/base.module.scss';
import styles from './userpage.module.scss';
import { UserPageForm } from './UserPageForm';

const UserPage: FC = () => (
  <div className={base.wrapper}>
    <div className={styles.formWrapper}>
      <h1 className={base.title}>Личный кабинет</h1>
      <UserPageForm />
    </div>
  </div>
);

export default UserPage;
