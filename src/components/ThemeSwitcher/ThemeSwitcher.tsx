import { uiSelector } from 'src/selectors';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { uiSetCurrentThemeRequested } from 'src/actions/uiActions/ui.actions';
import { ThemeCreator } from '../ThemeCreator';
import styles from './themeSwitcher.module.scss';
import { themeClassNames } from '../Theme/Theme';

export const ThemeSwitcher: FC = () => {
  const ui = useSelector(uiSelector);
  const dispatch = useDispatch();
  const [themeCreatorOpened, setThemeCreatorOpened] = useState(false);
  const [listOpened, setListOpened] = useState(false);

  const showThemeCreator = useCallback(() => {
    setThemeCreatorOpened(true);
  }, []);

  const closeThemeCreator = useCallback(() => {
    setThemeCreatorOpened(false);
  }, []);

  const toggleListOpen = useCallback(() => {
    setListOpened((isOpened) => !isOpened);
  }, []);

  const handleThemeClick = useCallback(
    (themeId) => () => {
      dispatch(uiSetCurrentThemeRequested({ id: themeId }));
      setListOpened(false);
    },
    [dispatch],
  );

  return (
    <div className={styles.switcher}>
      <button
        onClick={toggleListOpen}
        className={classNames(
          themeClassNames.accentColor,
          themeClassNames.foregroundAccentColor,
          styles.item,
<<<<<<< HEAD
=======
          styles.current,
>>>>>>> ac2606fac9cf8865a17cc5b8820e2ed7d2d0f13c
        )}
      >
        {ui.theme?.name || 'По умолчанию'}
        &nbsp;&lt;
      </button>
      {listOpened && (
        <ul className={styles.list}>
          {ui.themes
            .filter((theme) => theme.id !== ui.theme?.id)
            .map((theme) => (
              <li>
                <button
                  onClick={handleThemeClick(theme.id)}
                  className={styles.item}
                >
                  {theme.name}
                </button>
              </li>
            ))}
          <li>
            <button className={styles.item} onClick={showThemeCreator}>
              Создать тему
            </button>
          </li>
        </ul>
      )}

      {themeCreatorOpened && <ThemeCreator onClose={closeThemeCreator} />}
    </div>
  );
};
