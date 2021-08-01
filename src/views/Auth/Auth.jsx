import React from 'react';
import PT from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';
import LoginForm from '../../forms/LoginForm';

const Auth = ({ match }) => (
  <AuthLayout>
    <Switch>
      <Redirect from={`${match.path}`} to={`${match.path}/login`} exact />
      <Route path={`${match.path}/login`} component={LoginForm} />
      <Route path={`${match.path}/sign-up`}>Sign Up</Route>
      <Route path={`${match.path}/reset-pass`}>Reset Pass</Route>
      <Route path={`${match.path}/create-new-pass`}>Create New Pass</Route>
    </Switch>
  </AuthLayout>
);

Auth.propTypes = {
  match: PT.shape({
    path: PT.string,
  }).isRequired,
};

export default Auth;
