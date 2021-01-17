import React, { FC, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes';
import { fetchProfileRequested } from './actions/authActions/auth.actions';
import { Geolocation } from './components/Geolocation';
import { Header, ErrorBoundary } from './components';
import { UiContext } from './components/UiContext';
import { authSelector } from './selectors';
import { ProtectedRoute } from './components/ProtectedRoute';

export type TUiSettings = {
  showHeader: boolean;
};

export const App: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
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

  if (!auth.isLoggedIn && auth.isLoading) {
    return <div>loading</div>;
  }

  return (
    <UiContext.Provider value={{ uiSettings, setUiSettings }}>
      <ErrorBoundary>
        <div className="page">
          {auth.isLoggedIn && <Geolocation />}
          {uiSettings.showHeader && <Header />}
          <Switch>
            {routes.map(({ isProtected, ...route }) => {
              if (isProtected) {
                return <ProtectedRoute {...route} />;
              }

              return <Route {...route} />;
            })}
          </Switch>
        </div>
      </ErrorBoundary>
    </UiContext.Provider>
  );
};
