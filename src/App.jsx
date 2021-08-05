import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { AUTH_ROUTES_BASE } from './routes/auth';
import { STREAMS_ROUTES_BASE } from './routes/streams';
import Auth from './views/Auth';
import Streams from './views/Streams';

import './assets/styles/index.css';
import { INTERNS_ROUTES_BASE } from './routes/interns';
import Interns from './views/Interns';
import MainLayout from './components/MainLayout';

const App = () => (
  <BrowserRouter>
    <Redirect from="/" to={AUTH_ROUTES_BASE} exact />
    <Switch>
      <Route path={AUTH_ROUTES_BASE} component={Auth} />
      <Route path={[STREAMS_ROUTES_BASE, INTERNS_ROUTES_BASE]}>
        <MainLayout>
          <Switch>
            <Route path={STREAMS_ROUTES_BASE} component={Streams} />
            <Route path={INTERNS_ROUTES_BASE} component={Interns} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
