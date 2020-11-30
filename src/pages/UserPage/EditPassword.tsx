import React, { FC, useState } from 'react';
import styles from './userpage.module.scss';
import { changePassword } from '../../api/user';

export const EditPassword: FC = () => {
  const [edit, setEdit] = useState(false);
  const [oldP, setOldP] = useState('');
  const [newP, setNewP] = useState('');

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChangeOld = (e: any) => {
    setOldP(e.target.value);
  };

  const handleChangeNew = (e: any) => {
    setNewP(e.target.value);
  };

  const onSave = () => {
    changePassword(oldP, newP)
      .then(({ status }) => {
        if (status === 200) {
          setOldP('');
          setOldP('');

          setEdit(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.password}>
      <div className={styles.password__wrapBtn}>
        <button
          type="button"
          className={styles.password__btn}
          onClick={handleEdit}
        >
          {edit ? 'Отменить' : 'Изменить пароль'}
        </button>
      </div>

      { edit ? (
        <>
          <form className={styles.password__form}>
            <input
              type="text"
              placeholder="Введите текущий пароль"
              onChange={handleChangeOld}
            />
            <input
              type="text"
              placeholder="Введите новый пароль"
              onChange={handleChangeNew}
            />
          </form>

          <div className={styles.password__wrapBtn}>
            <button
              type="submit"
              className={styles.password__btn}
              onClick={onSave}
            >
              Сохранить
            </button>
          </div>
        </>
      ) : null }
    </div>
  );
};
