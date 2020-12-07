import React, { FC, useState, useEffect } from 'react';
import base from '../../styles/base.module.scss';
import styles from './userpage.module.scss';
import { UserPageForm } from './UserPageForm';
import { getUserInfo } from '../../api/auth';
import { Avatar } from './Avatar';
import { EditPassword } from './EditPassword';

const defaultUser = {
  avatar: '',
  displayName: '',
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  phone: '',
};

const UserPage: FC = () => {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setUser({
          avatar: data.avatar,
          displayName: data.display_name,
          firstName: data.first_name,
          lastName: data.second_name,
          login: data.email,
          email: data.email,
          phone: data.phone,
        });
      })
      .catch((err) => {
        console.log('getUserInfo err - ', err);
      });
  }, []);

  return (
    <div className={base.wrapper}>
      <div className={styles.formWrapper}>
        <h1 className={base.title}>Личный кабинет</h1>
        <Avatar avatar={user.avatar} />
        <UserPageForm
          firstName={user.firstName}
          lastName={user.lastName}
          login={user.login}
          email={user.email}
          phone={user.phone}
        />
        <EditPassword />
      </div>
    </div>
  );
};

export default UserPage;
