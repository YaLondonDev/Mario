import { ReactNode, HTMLAttributes } from 'react';

export type Props = {
  className?: string;
  children: ReactNode;
  type?: 'button' | 'submit';
} & HTMLAttributes<HTMLButtonElement>;
