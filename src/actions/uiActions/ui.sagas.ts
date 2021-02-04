import { call, put, takeEvery } from 'redux-saga/effects';
import {
  uiFetchAllThemesRequested,
  uiFetchAllThemesSuccess,
  uiFetchCurrentThemeRequested,
  uiFetchCurrentThemeSuccess,
  uiRequestFailed,
  uiSetCurrentThemeRequested,
  uiSetCurrentThemeSuccess,
} from './ui.actions';

import {
  TUiCreateThemeRequested,
  TUiSetCurrentThemeRequested,
  UiActions,
} from './ui.types';

import uiApi from './ui.api';

function* fetchCurrentTheme() {
  try {
    const theme = yield call(uiApi.fetchCurrentTheme);
    yield put(uiFetchCurrentThemeSuccess(theme.data?.data));
  } catch (error) {
    yield put(uiRequestFailed(error.message));
  }
}

function* fetchAllThemes() {
  try {
    const themes = yield call(uiApi.fetchAllThemes);
    yield put(uiFetchAllThemesSuccess(themes.data?.data));
  } catch (error) {
    yield put(uiRequestFailed(error.message));
  }
}

function* setCurrentTheme(action: TUiSetCurrentThemeRequested) {
  try {
    const theme = yield call(uiApi.setCurrentTheme, action.payload);
    yield put(uiSetCurrentThemeSuccess(theme.data.data));
    yield put(uiFetchAllThemesRequested());
  } catch (error) {
    yield put(uiRequestFailed(error.message));
  }
}

function* createTheme(action: TUiCreateThemeRequested) {
  try {
    const themeId = yield call(uiApi.createTheme, action.payload);
    yield put(uiSetCurrentThemeRequested({ id: themeId.data.data }));
    yield put(uiFetchCurrentThemeRequested());
  } catch (error) {
    yield put(uiRequestFailed(error.message));
  }
}

export function* uiWatcher() {
  yield takeEvery(UiActions.FETCH_CURRENT_THEME_REQUESTED, fetchCurrentTheme);
  yield takeEvery(UiActions.FETCH_ALL_THEMES_REQUESTED, fetchAllThemes);
  yield takeEvery(UiActions.SET_CURRENT_THEME_REQUESTED, setCurrentTheme);
  yield takeEvery(UiActions.CREATE_THEME_REQUESTED, createTheme);
}
