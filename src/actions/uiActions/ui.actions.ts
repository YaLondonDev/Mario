import { TTheme } from 'src/reducers/redux';
import {
  TSetCurrentThemePayload,
  TUiCreateThemeRequested,
  TUiCreateThemeSuccess,
  TUiFetchAllThemesRequested,
  TUiFetchAllThemesSuccess,
  TUiFetchCurrentThemeRequested,
  TUiFetchCurrentThemeSuccess,
  TUiRequestFailed,
  TUiSetCurrentThemeRequested,
  TUiSetCurrentThemeSuccess,
  UiActions,
} from './ui.types';

export const uiRequestFailed = (error: string): TUiRequestFailed => ({
  type: UiActions.UI_REQUEST_FAILED,
  payload: error,
});

export const uiFetchCurrentThemeRequested = (): TUiFetchCurrentThemeRequested => ({
  type: UiActions.FETCH_CURRENT_THEME_REQUESTED,
});

export const uiFetchCurrentThemeSuccess = (
  theme: TTheme,
): TUiFetchCurrentThemeSuccess => ({
  type: UiActions.FETCH_CURRENT_THEME_SUCCESS,
  payload: theme,
});

export const uiFetchAllThemesRequested = (): TUiFetchAllThemesRequested => ({
  type: UiActions.FETCH_ALL_THEMES_REQUESTED,
});

export const uiFetchAllThemesSuccess = (
  themes: TTheme[],
): TUiFetchAllThemesSuccess => ({
  type: UiActions.FETCH_ALL_THEMES_SUCCESS,
  payload: themes,
});

export const uiSetCurrentThemeRequested = (
  payload: TSetCurrentThemePayload,
): TUiSetCurrentThemeRequested => ({
  type: UiActions.SET_CURRENT_THEME_REQUESTED,
  payload,
});

export const uiSetCurrentThemeSuccess = (
  payload: TTheme,
): TUiSetCurrentThemeSuccess => ({
  type: UiActions.SET_CURRENT_THEME_SUCCESS,
  payload,
});

export const uiCreateThemeRequested = (
  payload: TTheme,
): TUiCreateThemeRequested => ({
  type: UiActions.CREATE_THEME_REQUESTED,
  payload,
});

export const uiCreateThemeSuccess = (
  payload: TTheme,
): TUiCreateThemeSuccess => ({
  type: UiActions.CREATE_THEME_SUCCESS,
  payload,
});
