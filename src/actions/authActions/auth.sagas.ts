import { takeEvery, put, call } from 'redux-saga/effects';
import {
  authLogoutSuccess,
  authRequested,
  authRequestedFailed,
  fetchProfileRequested,
  fetchProfileSuccess,
} from './auth.actions';
import { AuthApiService } from './auth.api';
import {
  AuthActions,
  TSignInRequestedAction,
  TSignUpRequestedAction,
} from './auth.types';

const authApi = new AuthApiService();

function* signUp(action: TSignUpRequestedAction) {
  try {
    yield put(authRequested());
    yield call(authApi.signUp, action.payload);
    yield put(fetchProfileRequested());
  } catch (error) {
    yield put(authRequestedFailed(error.message));
  }
}

function* fetchProfile() {
  try {
    yield put(authRequested());
    const profile = yield call(authApi.fetchProfile);
    yield put(fetchProfileSuccess(profile));
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

export function* authWather() {
  yield takeEvery(AuthActions.SIGN_UP_REQUESTED, signUp);
  yield takeEvery(AuthActions.SIGN_IN_REQUESTED, signIn);
  yield takeEvery(AuthActions.FETCH_PROFILE_REQUESTED, fetchProfile);
  yield takeEvery(AuthActions.AUTH_LOGOUT_REQUESTED, logout);
}
