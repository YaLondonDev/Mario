import { all, fork } from 'redux-saga/effects';
import { authWather } from './authActions/auth.sagas';
import { uiWatcher } from './uiActions/ui.sagas';

export function* rootSaga() {
  yield all([fork(authWather), fork(uiWatcher)]);
}
