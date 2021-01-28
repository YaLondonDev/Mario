import React, { FC, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { Modal } from '../Modal/Modal';
import styles from './modalDialog.module.scss';
import { themeClassNames } from '../Theme/Theme';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

export type TModalDialogProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export type TModalDialog = FC<TModalDialogProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

export const ModalDialog: TModalDialog = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef && modalRef.current && modalRef.current === e.target) {
        onClose();
      }
    },
    [modalRef, onClose],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [modalRef, handleClick]);

  return (
    <Modal>
      <div ref={modalRef} className={styles.modal}>
        <div
          className={classNames(
            themeClassNames.backgroundColor,
            themeClassNames.foregroundColor,
            styles.content,
          )}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

ModalDialog.Header = Header;
ModalDialog.Body = Body;
ModalDialog.Footer = Footer;
