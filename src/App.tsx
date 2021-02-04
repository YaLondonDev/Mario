import React, { FC, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';

import routes from './routes';
import { fetchProfileRequested } from './actions/authActions/auth.actions';
import { Geolocation } from './components/Geolocation';
import { Header, ErrorBoundary } from './components';
import { UiContext } from './components/UiContext';
import { authSelector, uiSelector } from './selectors';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Theme } from './components/Theme/Theme';

export type TUiSettings = {
  showHeader: boolean;
};

const App: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const ui = useSelector(uiSelector);
  const [uiSettings, setUiSettings] = useState<TUiSettings>({
    showHeader: true,
  });

  useEffect(() => {
    dispatch(fetchProfileRequested());
  }, []);

  useEffect(() => {
    if (!auth.isLoading && !auth.isLoggedIn) {
      history.push('/signin');
    }
  }, [auth, history]);

  if ((!auth.isLoggedIn && auth.isLoading) || ui.isLoading) {
    return <div>loading</div>;
  }

  return (
    <UiContext.Provider value={{ uiSettings, setUiSettings }}>
      <ErrorBoundary>
        <Theme />
        <div className="page">
          {auth.isLoggedIn && <Geolocation />}
          {uiSettings.showHeader && <Header />}
          <Switch>
            {routes.map(({ isProtected, ...route }) => {
              if (isProtected) {
                return <ProtectedRoute key={route.path} {...route} />;
              }

              return <Route key={route.path} {...route} />;
            })}
          </Switch>
        </div>
      </ErrorBoundary>
    </UiContext.Provider>
  );
};

export default hot(App);
