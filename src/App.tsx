import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Game, Leaderboard, SignIn, SignUp } from './pages';
import { Header, ErrorBoundary } from './components';
import { UiContext } from './components/UiContext';

export type TUiSettings = {
  showHeader: boolean;
};

export const App: FC = () => {
  const [uiSettings, setUiSettings] = useState<TUiSettings>({
    showHeader: true,
  });

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
          </Switch>
        </div>
      </ErrorBoundary>
    </UiContext.Provider>
  );
};
