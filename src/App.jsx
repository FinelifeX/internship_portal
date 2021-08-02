import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { AUTH_ROUTES_BASE } from './routes/auth';
import Auth from './views/Auth/Auth';

import './assets/styles/index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to={AUTH_ROUTES_BASE} />
      </Route>
      <Route path={AUTH_ROUTES_BASE} component={Auth} />
    </Switch>
  </BrowserRouter>
);

export default App;
