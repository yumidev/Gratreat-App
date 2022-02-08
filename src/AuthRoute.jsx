import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { PageNotFound } from './pages';

const AuthRoute = (props) => {
  const { user } = props;
  const isAuthUser = !!user;
  // const isAdmin = user?.isAdmin

  if (!isAuthUser) return <Redirect to="/login" />

  return (
    <Switch>
      <Route exact {...props} />
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  )
};

export default AuthRoute;