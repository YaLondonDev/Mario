import { all, fork } from 'redux-saga/effects';
import { authWather } from './authActions/auth.sagas';

export function* rootSaga() {
  yield all([fork(authWather)]);
}
