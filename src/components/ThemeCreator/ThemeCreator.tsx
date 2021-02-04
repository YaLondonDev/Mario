import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uiSelector } from 'src/selectors';
import { uiCreateThemeRequested } from 'src/actions/uiActions/ui.actions';
import { TTheme } from 'src/reducers/redux';

import { Input } from '..';
import Button from '../Button/Button';
import { ModalDialog } from '../ModalDialog/ModalDialog';

export type TThemeCreatorProps = {
  onClose: () => void;
};

export const ThemeCreator: FC<TThemeCreatorProps> = ({ onClose }) => {
  const ui = useSelector(uiSelector);
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      name: '',
      accentColor: ui.theme?.accentColor,
      foregroundAccentColor: ui.theme?.foregroundAccentColor,
      backgroundColor: ui.theme?.backgroundColor,
      foregroundColor: ui.theme?.foregroundColor,
    },
    onSubmit: (data) => {
      dispatch(uiCreateThemeRequested(data as TTheme));
    },
  });

  return (
    <ModalDialog onClose={onClose}>
      <ModalDialog.Header>Новая тема</ModalDialog.Header>
      <form onSubmit={form.handleSubmit}>
        <ModalDialog.Body>
          <Input
            label="Название темы"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
          />
          <Input
            label="Акцентный цвет заливки"
            name="accentColor"
            value={form.values.accentColor}
            onChange={form.handleChange}
          />
          <Input
            label="Акцентный цвет текста"
            name="foregroundAccentColor"
            value={form.values.foregroundAccentColor}
            onChange={form.handleChange}
          />
          <Input
            label="Основной цвет заливки"
            name="backgroundColor"
            value={form.values.backgroundColor}
            onChange={form.handleChange}
          />
          <Input
            label="Основной цвет текста"
            name="foregroundColor"
            value={form.values.foregroundColor}
            onChange={form.handleChange}
          />
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button type="submit">Создать</Button>
        </ModalDialog.Footer>
      </form>
    </ModalDialog>
  );
};
