import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home, Game, Leaderboard, SignIn, SignUp,
} from './pages';
import { Header } from './components';

export const App: FC = () => (
  <div className="page">
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/game" component={Game} exact />
      <Route path="/leaderboard" component={Leaderboard} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  </div>
);
