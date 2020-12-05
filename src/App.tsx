import React, { FC, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home, Game, Leaderboard, SignIn, SignUp, UserPage } from './pages';
import { Header, ErrorBoundary } from './components';
import { UiContext } from './components/UiContext';
import { TRootReducer } from './store';
import { fetchProfileRequested } from './actions/authActions/auth.actions';
import { TAuthReducerState } from './reducers/reducers.types';
import { useGeolocation } from './hooks/useGeolocation';

export type TUiSettings = {
  showHeader: boolean;
};

export const App: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [location, requestLocation] = useGeolocation();
  const authStore = useSelector<TRootReducer, TAuthReducerState>(
    (root) => root.auth,
  );
  const [uiSettings, setUiSettings] = useState<TUiSettings>({
    showHeader: true,
  });

  useEffect(() => {
    dispatch(fetchProfileRequested());
    requestLocation();
  }, []);

  useEffect(() => {
    if (!authStore.isLoggedIn && !authStore.isLoading) {
      history.push('/signin');
    }
  }, [authStore, history]);

  return (
    <UiContext.Provider value={{ uiSettings, setUiSettings }}>
      <ErrorBoundary>
        <div className="page">
          {location && (
            <div
              style={{
                position: 'fixed',
                right: '0',
                background: '#fff',
                color: '#000',
                padding: '5px',
              }}
            >
              {location}
            </div>
          )}
          {uiSettings.showHeader && <Header />}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/game" component={Game} exact />
            <Route path="/leaderboard" component={Leaderboard} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/user" component={UserPage} exact />
          </Switch>
        </div>
      </ErrorBoundary>
    </UiContext.Provider>
  );
};
