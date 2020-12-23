import React, { FC, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Home, Game, Leaderboard, SignIn, SignUp, UserPage } from './pages';
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
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetch('https://ya-praktikum.tech/api/v2/oauth/yandex', {
        method: 'POST',
        // @ts-ignore
        // RequestCredentials: 'include',
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          code,
        }),
      })
        .then((res) => res)
        .then(({ status }) => {
          if (status === 200) {
            dispatch(fetchProfileRequested());
          }
        })
        .catch((err) => {
          console.log('err - ', err);
        });
    } else {
      dispatch(fetchProfileRequested());
    }
  }, []);

  useEffect(() => {
    // console.log('PINK - ', window.location.href);

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
            <ProtectedRoute path="/" component={Home} exact />
            <ProtectedRoute path="/game" component={Game} exact />
            <ProtectedRoute path="/leaderboard" component={Leaderboard} exact />
            <ProtectedRoute path="/user" component={UserPage} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        </div>
      </ErrorBoundary>
    </UiContext.Provider>
  );
};
