import {
  AuthActions,
  TAuthActionTypes,
} from '../actions/authActions/auth.types';
import { TAuthReducerState } from './reducers.types';

const initialState: TAuthReducerState = {
  isLoggedIn: false,
  isLoading: true,
  isFailed: false,
  profile: null,
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
        profile: action.payload,
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
    default:
      return state;
  }
};