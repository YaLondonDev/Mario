import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import base from '../../styles/base.module.scss';
import styles from './userpage.module.scss';
import { UserPageForm } from './UserPageForm';
import { Avatar } from './Avatar';
import { EditPassword } from './EditPassword';
import { authSelector } from '../../selectors';

const UserPage: FC = () => {
  const auth = useSelector(authSelector);

  console.log(auth);

  return (
    <div className={base.wrapper}>
      <div className={styles.formWrapper}>
        <h1 className={base.title}>Личный кабинет</h1>
        <Avatar avatar={auth.profile.avatar} />
        <UserPageForm
          firstName={auth.profile.firstName}
          lastName={auth.profile.secondName}
          login={auth.profile.login}
          email={auth.profile.email}
          phone={auth.profile.phone}
        />
        <EditPassword />
      </div>
    </div>
  );
};

export default UserPage;
