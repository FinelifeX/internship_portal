import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Auth from './views/Auth/Auth';

import './assets/styles/index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth" component={Auth} />
    </Switch>
  </BrowserRouter>
);

export default App;
