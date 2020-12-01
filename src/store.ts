import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { authWather } from './actions/authActions/auth.sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
export type TRootReducer = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(authWather);
