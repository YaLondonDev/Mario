import { Store } from 'redux';
import { SagaMiddleware } from 'redux-saga';

export type AppStore = Store & {
  runSaga: SagaMiddleware['run'];
  close: () => void;
};

export type TUserProfile = {
  id?: number;
  firstName: string;
  secondName: string;
  displayName?: string;
  login: string;
  email: string;
  phone: string;
  avatar?: string;
};

export type TAuthReducerState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  isFailed: boolean;
  profile: TUserProfile | null;
};

export type TUserReducerState = TUserProfile;
