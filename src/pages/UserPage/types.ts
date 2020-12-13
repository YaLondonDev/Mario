import { AllHTMLAttributes } from 'react';

export type TPropsInput = {
  label: string;
  error: string;
  editMode: boolean;
} & AllHTMLAttributes<HTMLElement>;

export type TPropsUserPage = {
  firstName?: string,
  lastName?: string,
  login?: string,
  email?: string,
  phone?: string,
  password?: string,
} & AllHTMLAttributes<HTMLElement>;

export type TAvatarProps = {
  avatar?: string
}
