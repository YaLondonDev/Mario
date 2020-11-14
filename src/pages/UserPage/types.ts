import { AllHTMLAttributes } from 'react';

export type PropsInput = {
  label: string;
  error: string;
  editMode: boolean;
} & AllHTMLAttributes<HTMLElement>;

export type PropsUserPage = {
  firstName?: string,
  lastName?: string,
  login?: string,
  email?: string,
  phone?: string,
  password?: string
} & AllHTMLAttributes<HTMLElement>;
