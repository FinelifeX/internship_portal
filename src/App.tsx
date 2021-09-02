import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { AuthRoutes, AUTH_ROUTES_BASE } from './routes/auth';
import { StreamsRoutes, STREAMS_ROUTES_BASE } from './routes/streams';
import { INTERNS_ROUTES_BASE } from './routes/interns';
import Auth from './views/Auth';
import Streams from './views/Streams';
import Interns from './views/Interns';
import MainLayout from './components/MainLayout';

import './assets/styles/index.css';

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/" to={AUTH_ROUTES_BASE} exact />
      <Redirect from={AUTH_ROUTES_BASE} to={AuthRoutes.Login} exact />
      <Route path={AUTH_ROUTES_BASE} component={Auth} />
      <Route path={[STREAMS_ROUTES_BASE, INTERNS_ROUTES_BASE]}>
        <MainLayout>
          <Switch>
            <Redirect
              from={STREAMS_ROUTES_BASE}
              exact
              to={StreamsRoutes.Current}
            />
            <Route path={STREAMS_ROUTES_BASE} component={Streams} />
            <Route path={INTERNS_ROUTES_BASE} component={Interns} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
