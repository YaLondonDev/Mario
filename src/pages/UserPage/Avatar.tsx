import React, { FC, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { profileUpdate } from 'src/actions/authActions/auth.actions';
import { TUserProfile } from 'src/reducers/reducers.types';
import { toCamelCase } from 'src/utils/toCamelCase';
import { IconUser } from 'src/components/Icon/Icon';
import userApi from 'src/api/user.api';

import styles from './userpage.module.scss';
import { TAvatarProps } from './types';

export const Avatar: FC<TAvatarProps> = ({ avatar }) => {
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [edit, setEdit] = useState(false);

  const onChangeAvatar = useCallback(() => {
    setEdit(true);
  }, [setEdit]);

  const handleChangeAvatar = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const formData = new FormData();
      const [fileInputData] = fileInput.current.files;

      formData.append('avatar', fileInputData);

      userApi
        .changeAvatar(formData)
        .then((res) =>
          dispatch(profileUpdate(toCamelCase(res.data) as TUserProfile)),
        )
        .catch((err) => alert(err.message));
    },
    [fileInput, dispatch],
  );

  return (
    <form className={styles.avatar}>
      <label htmlFor="avatar">
        {avatar ? (
          <img src={`https://ya-praktikum.tech${avatar}`} alt="" />
        ) : (
          <IconUser />
        )}
      </label>

      <input
        ref={fileInput}
        onChange={onChangeAvatar}
        id="avatar"
        type="file"
        name="avatar"
        accept="image/*"
      />

      <div className={styles.avatar__footer}>
        {edit ? (
          <button
            className={styles.avatar__btn}
            type="submit"
            onClick={handleChangeAvatar}
          >
            Изменить
          </button>
        ) : null}
      </div>
    </form>
  );
};
