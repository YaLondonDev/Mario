import { TUserProfile } from 'src/reducers/reducers.types';

import {
  AuthActions,
  TAuthLogoutRequestedAction,
  TAuthLogoutSuccessAction,
  TAuthRequestedAction,
  TAuthRequestFailed,
  TFetchProfileRequestedAction,
  TFetchProfileSuccessAction,
  TSignInPayload,
  TSignInRequestedAction,
  TSignUpPayload,
  TSignUpRequestedAction,
  TSignInYandex,
} from './auth.types';

export const authRequest = (
  payload: TSignUpPayload,
): TSignUpRequestedAction => ({
  type: AuthActions.SIGN_UP_REQUESTED,
  payload,
});

export const authRequested = (): TAuthRequestedAction => ({
  type: AuthActions.REQUESTED,
});

export const authRequestedFailed = (message: string): TAuthRequestFailed => ({
  type: AuthActions.REQUEST_FAILED,
  payload: message,
});

export const fetchProfileRequested = (): TFetchProfileRequestedAction => ({
  type: AuthActions.FETCH_PROFILE_REQUESTED,
});

export const fetchProfileSuccess = (
  profile: TUserProfile,
): TFetchProfileSuccessAction => ({
  type: AuthActions.FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const signInRequested = (
  signInPayload: TSignInPayload,
): TSignInRequestedAction => ({
  type: AuthActions.SIGN_IN_REQUESTED,
  payload: signInPayload,
});

export const authLogoutSuccess = (): TAuthLogoutSuccessAction => ({
  type: AuthActions.AUTH_LOGOUT_SUCCESS,
});

export const authLogoutRequested = (): TAuthLogoutRequestedAction => ({
  type: AuthActions.AUTH_LOGOUT_REQUESTED,
});

export const profileUpdate = (profile: TUserProfile) => ({
  type: AuthActions.PROFILE_UPDATE,
  payload: profile,
});

export const getServiceIdYandex = (): TSignInYandex => ({
  type: AuthActions.SIGN_IN_YANDEX,
});
