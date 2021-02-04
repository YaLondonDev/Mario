import { TUiActionTypes, UiActions } from 'src/actions/uiActions/ui.types';
import { TUiReducerState } from './redux';

export const initialState: TUiReducerState = {
  isLoading: false,
  theme: null,
  themes: [],
  error: null,
};

export const uiReducer = (
  state = initialState,
  action: TUiActionTypes,
): TUiReducerState => {
  switch (action.type) {
    case UiActions.UI_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UiActions.FETCH_CURRENT_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case UiActions.FETCH_ALL_THEMES_SUCCESS:
      return {
        ...state,
        themes: action.payload,
      };
    case UiActions.SET_CURRENT_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case UiActions.CREATE_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
