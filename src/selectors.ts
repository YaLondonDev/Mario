import { createSelector } from 'reselect';
import { TRootReducer } from './store';

export const authSelector = createSelector(
  ({ auth }: TRootReducer) => auth,
  (auth) => auth,
);

export const uiSelector = createSelector(
  ({ ui }: TRootReducer) => ui,
  (ui) => ui,
);
