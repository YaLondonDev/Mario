import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { FC } from 'react';

import { authSelector } from 'src/selectors';

export const ProtectedRoute: FC<RouteProps> = (props) => {
  const auth = useSelector(authSelector);

  if (auth.isLoggedIn) {
    return <Route {...props} />;
  }

  return <Route {...props} component={() => <Redirect to="/signin" />} />;
};
