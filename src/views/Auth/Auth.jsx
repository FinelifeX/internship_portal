import React from 'react';
import PT from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AUTH_ROUTES_BASE, AuthRoutes } from '../../routes/auth';
import AuthLayout from '../../components/AuthLayout';
import LoginForm from '../../forms/LoginForm';
import AuthTabs from '../../components/AuthTabs';
import SignUpForm from '../../forms/SignUpForm';
import ResetPassForm from '../../forms/ResetPassForm';

const Auth = () => (
  <AuthLayout>
    <Route path={[AuthRoutes.Login, AuthRoutes.SignUp]}>
      <AuthTabs />
    </Route>
    <Switch>
      <Redirect from={AUTH_ROUTES_BASE} to={AuthRoutes.Login} exact />
      <Route path={AuthRoutes.Login} component={LoginForm} />
      <Route path={AuthRoutes.SignUp} component={SignUpForm} />
      <Route path={AuthRoutes.ResetPass} component={ResetPassForm} />
      <Route path={AuthRoutes.CreatePass}>Create New Pass</Route>
    </Switch>
  </AuthLayout>
);

Auth.propTypes = {
  match: PT.shape({
    path: PT.string,
  }).isRequired,
};

export default Auth;
