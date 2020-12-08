import { createSelector } from 'reselect';
import { TRootReducer } from './store';

export const loggedSelector = createSelector(
  ({ auth: { isLoggedIn } }: TRootReducer) => isLoggedIn,
  (isLoggedIn) => isLoggedIn,
);
