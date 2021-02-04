import { TUserProfile } from 'src/reducers/redux';

export type TSignUpPayload = {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignInPayload = {
  login: string;
  password: string;
};

export enum AuthActions {
  REQUESTED = 'REQUESTED',
  REQUEST_FAILED = 'REQUEST_FAILED',
  SIGN_UP_REQUESTED = 'SIGN_UP_REQUESTED',
  SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED',
  FETCH_PROFILE_REQUESTED = 'FETCH_PROFILE_REQUESTED',
  FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
  AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_REQUESTED = 'AUTH_LOGOUT_REQUESTED',
  PROFILE_UPDATE = 'PROFILE_UPDATE',
  SIGN_IN_YANDEX = 'SIGN_IN_YANDEX',
}

export type TAuthRequestedAction = {
  type: AuthActions.REQUESTED;
};

export type TAuthRequestFailed = {
  type: AuthActions.REQUEST_FAILED;
  payload: string;
};

export type TSignUpRequestedAction = {
  type: AuthActions.SIGN_UP_REQUESTED;
  payload: TSignUpPayload;
};

export type TFetchProfileRequestedAction = {
  type: AuthActions.FETCH_PROFILE_REQUESTED;
  payload?: string;
};

export type TFetchProfileSuccessAction = {
  type: AuthActions.FETCH_PROFILE_SUCCESS;
  payload: TUserProfile;
};

export type TSignInRequestedAction = {
  type: AuthActions.SIGN_IN_REQUESTED;
  payload: TSignInPayload;
};

export type TAuthLogoutSuccessAction = {
  type: AuthActions.AUTH_LOGOUT_SUCCESS;
};

export type TAuthLogoutRequestedAction = {
  type: AuthActions.AUTH_LOGOUT_REQUESTED;
};

export type TProfileUpdate = {
  type: AuthActions.PROFILE_UPDATE;
  payload: TUserProfile;
};

export type TSignInYandex = {
  type: AuthActions.SIGN_IN_YANDEX;
};

export type TAuthActionTypes =
  | TAuthRequestedAction
  | TAuthRequestFailed
  | TSignUpRequestedAction
  | TFetchProfileSuccessAction
  | TAuthLogoutSuccessAction
  | TProfileUpdate
  | TSignInYandex;
