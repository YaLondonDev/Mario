import { TTheme } from 'appSrc/reducers/redux';

export type TSetCurrentThemePayload = {
  id: number;
};

export type TCreateThemePayload = {
  name: string;
  accentColor: string;
  foregroundAccentColor: string;
  backgroundColor: string;
  foregroundColor: string;
};

export enum UiActions {
  UI_REQUEST_FAILED = 'UI_REQUEST_FAILED',
  FETCH_CURRENT_THEME_REQUESTED = 'FETCH_CURRENT_THEME_REQUESTED',
  FETCH_CURRENT_THEME_SUCCESS = 'FETCH_CURRENT_THEME_SUCCESS',
  FETCH_ALL_THEMES_REQUESTED = 'FETCH_ALL_THEMES_REQUESTED',
  FETCH_ALL_THEMES_SUCCESS = 'FETCH_ALL_THEMES_SUCCESS',
  SET_CURRENT_THEME_REQUESTED = 'SET_CURRENT_THEME_REQUESTED',
  SET_CURRENT_THEME_SUCCESS = 'SET_CURRENT_THEME_SUCCESS',
  CREATE_THEME_REQUESTED = 'CREATE_THEME_REQUESTED',
  CREATE_THEME_SUCCESS = 'CREATE_THEME',
}

export type TUiRequestFailed = {
  type: UiActions.UI_REQUEST_FAILED;
  payload: string;
};

export type TUiFetchCurrentThemeRequested = {
  type: UiActions.FETCH_CURRENT_THEME_REQUESTED;
};

export type TUiFetchCurrentThemeSuccess = {
  type: UiActions.FETCH_CURRENT_THEME_SUCCESS;
  payload: TTheme;
};

export type TUiFetchAllThemesRequested = {
  type: UiActions.FETCH_ALL_THEMES_REQUESTED;
};

export type TUiFetchAllThemesSuccess = {
  type: UiActions.FETCH_ALL_THEMES_SUCCESS;
  payload: TTheme[];
};

export type TUiSetCurrentThemeRequested = {
  type: UiActions.SET_CURRENT_THEME_REQUESTED;
  payload: TSetCurrentThemePayload;
};

export type TUiSetCurrentThemeSuccess = {
  type: UiActions.SET_CURRENT_THEME_SUCCESS;
  payload: TTheme;
};

export type TUiCreateThemeRequested = {
  type: UiActions.CREATE_THEME_REQUESTED;
  payload: TTheme;
};

export type TUiCreateThemeSuccess = {
  type: UiActions.CREATE_THEME_SUCCESS;
  payload: TTheme;
};

export type TUiActionTypes =
  | TUiRequestFailed
  | TUiFetchCurrentThemeSuccess
  | TUiFetchAllThemesSuccess
  | TUiSetCurrentThemeSuccess
  | TUiCreateThemeSuccess;
