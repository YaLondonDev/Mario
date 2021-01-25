import {
  AuthActions,
  TAuthActionTypes,
} from '../actions/authActions/auth.types';
import { TAuthReducerState } from './redux';

export const initialState: TAuthReducerState = {
  isLoggedIn: false,
  isLoading: true,
  isFailed: false,
  profile: null,
  theme: null,
};

export const authReducer = (
  state: typeof initialState = initialState,
  action: TAuthActionTypes,
): TAuthReducerState => {
  switch (action.type) {
    case AuthActions.REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
      };
    case AuthActions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        theme: action.payload.theme,
        isLoading: false,
        isLoggedIn: true,
        isFailed: false,
      };
    case AuthActions.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        profile: null,
        isLoading: false,
        isLoggedIn: false,
        isFailed: false,
      };
    case AuthActions.PROFILE_UPDATE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
