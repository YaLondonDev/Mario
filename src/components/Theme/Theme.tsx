import { uiSelector } from 'src/selectors';
import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const themeClassNames = {
  accentColor: 'accentColor',
  foregroundAccentColor: 'foregroundAccentColor',
  backgroundColor: 'backgroundColor',
  foregroundColor: 'foregroundColor',
};

export const Theme: FC = () => {
  const ui = useSelector(uiSelector);
  const styleRef = useRef<HTMLStyleElement>(null);

  useEffect(() => {
    styleRef.current = document.createElement('style');
    document.body.insertAdjacentElement('afterbegin', styleRef.current);
  }, []);

  useEffect(() => {
    const { theme } = ui;

    if (!theme) {
      return;
    }

    styleRef.current.innerHTML = `
      body {
        background-color: ${theme.backgroundColor}!important;
      }
      .accentColor {
        background-color: ${theme.accentColor}!important;
      }
      .foregroundAccentColor {
        color: ${theme.foregroundAccentColor}!important;
      }
      .backgroundColor {
        background-color: ${theme.backgroundColor}!important;
      }
      .foregroundColor {
        color: ${theme.foregroundColor}!important;
      }
    `;

    // eslint-disable-next-line consistent-return
    return () => {
      styleRef.current.innerHTML = '';
    };
  }, [ui.theme?.id]);

  return null;
};
