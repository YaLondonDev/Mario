import React, { FC, useRef, useState } from 'react';
import { TAvatarProps } from './types';
import { changeAvatar } from '../../api/user';
import styles from './userpage.module.scss';
import { IconUser } from '../../components/Icon/Icon';

export const Avatar: FC<TAvatarProps> = ({
  avatar,
}) => {
  const fileInput = useRef(null);
  const [edit, setEdit] = useState(false);

  const onChangeAvatar = () => {
    setEdit(true);
  };

  const handleAvatar = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const formData = new FormData();
    const fileInputData = fileInput.current.files[0];

    formData.append('avatar', fileInputData);

    changeAvatar(formData)
      .then((res) => res.json())
      .then((data) => {
        console.log('JSON - ', data);
      }).catch((err) => {
        console.log('err - ', err);
      });
  };

  return (
    <form className={styles.avatar}>
      <label htmlFor="avatar">
        {avatar ? <img src={`https://ya-praktikum.tech${avatar}`} alt="" /> : <IconUser />}
      </label>

      <input ref={fileInput} onChange={onChangeAvatar} id="avatar" type="file" name="avatar" accept="image/*" />

      <div className={styles.avatar__footer}>
        { edit ? <button className={styles.avatar__btn} type="submit" onClick={handleAvatar}>Изменить</button> : null }
      </div>
    </form>
  );
};
