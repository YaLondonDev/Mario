import { AllHTMLAttributes } from 'react';

export type Props = AllHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: string;
};
