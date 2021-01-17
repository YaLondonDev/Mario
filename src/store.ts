import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootSaga } from './actions/rootSaga';

import reducers from './reducers';
import { AppStore } from './reducers/redux';
import { isServer } from './utils/isServer';

const rootReducer = combineReducers(reducers);
export type TRootReducer = ReturnType<typeof rootReducer>;

export const configureStore = (initiaslState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const rootStore = createStore(
    rootReducer,
    initiaslState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  ) as AppStore;

  rootStore.runSaga = sagaMiddleware.run;
  rootStore.close = () => rootStore.dispatch(END);

  if (!isServer()) {
    rootStore.runSaga(rootSaga);
  }

  return rootStore;
};
