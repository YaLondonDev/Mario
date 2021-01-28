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

export type TTheme = {
  id: number;
  name: string;
  accentColor: string;
  foregroundAccentColor: string;
  backgroundColor: string;
  foregroundColor: string;
  creatorId: string;
  default: boolean;
};

export type TAuthReducerState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  isFailed: boolean;
  profile: TUserProfile | null;
};

export type TUiReducerState = {
  isLoading: boolean;
  theme: TTheme;
  themes: TTheme[];
  error: null | string;
};

export type TUserReducerState = TUserProfile;
