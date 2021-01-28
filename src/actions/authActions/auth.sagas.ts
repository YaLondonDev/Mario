import { takeEvery, put, call } from 'redux-saga/effects';
import {
  uiFetchAllThemesRequested,
  uiFetchCurrentThemeRequested,
} from '../uiActions/ui.actions';

import {
  authLogoutSuccess,
  authRequested,
  authRequestedFailed,
  fetchProfileRequested,
  fetchProfileSuccess,
} from './auth.actions';
import authApi from './auth.api';
import {
  AuthActions,
  TFetchProfileRequestedAction,
  TSignInRequestedAction,
  TSignUpRequestedAction,
} from './auth.types';

function* signUp(action: TSignUpRequestedAction) {
  try {
    yield put(authRequested());
    yield call(authApi.signUp, action.payload);
    yield put(fetchProfileRequested());
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

function* fetchProfile(action: TFetchProfileRequestedAction) {
  try {
    yield put(authRequested());
    const profile = yield call(authApi.fetchProfile, action.payload);
    yield put(fetchProfileSuccess(profile));
    yield put(uiFetchCurrentThemeRequested());
    yield put(uiFetchAllThemesRequested());
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

function* logout() {
  try {
    yield call(authApi.logout);
    yield put(authLogoutSuccess());
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

function* signIn(action: TSignInRequestedAction) {
  try {
    yield put(authRequested());
    yield call(authApi.signIn, action.payload);
    yield put(fetchProfileRequested());
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

function* getServiceYandex() {
  try {
    yield put(authRequested());
    const serviceId = yield call(authApi.getServiceYandex);

    const redirectUrl = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}`;
    document.location.href = redirectUrl;
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

export function* authWather() {
  yield takeEvery(AuthActions.SIGN_UP_REQUESTED, signUp);
  yield takeEvery(AuthActions.SIGN_IN_REQUESTED, signIn);
  yield takeEvery(AuthActions.FETCH_PROFILE_REQUESTED, fetchProfile);
  yield takeEvery(AuthActions.AUTH_LOGOUT_REQUESTED, logout);
  yield takeEvery(AuthActions.SIGN_IN_YANDEX, getServiceYandex);
}
