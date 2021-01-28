import ReactDOM from 'react-dom';
import { FC, useEffect, useMemo } from 'react';

export type TModal = {
  children: React.ReactNode;
};

export const Modal: FC<TModal> = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);
  const container = useMemo(() => document.querySelector('#modal-root'), []);

  useEffect(() => {
    if (!container) {
      return;
    }

    container.appendChild(el);

    return () => {
      container.removeChild(el);
    };
  }, [el, container]);

  return ReactDOM.createPortal(children, el);
};
