import React, { FC, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home, Game, Leaderboard, SignIn, SignUp, UserPage } from './pages';
import { Header, ErrorBoundary } from './components';
import { UiContext } from './components/UiContext';
import { fetchProfileRequested } from './actions/authActions/auth.actions';
import { loggedSelector } from './selector';

export type TUiSettings = {
  showHeader: boolean;
};

export const App: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(loggedSelector);
  const [uiSettings, setUiSettings] = useState<TUiSettings>({
    showHeader: true,
  });

  useEffect(() => {
    dispatch(fetchProfileRequested());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/signin');
    }
  }, [isLoggedIn]);

  return (
    <UiContext.Provider value={{ uiSettings, setUiSettings }}>
      <ErrorBoundary>
        <div className="page">
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
