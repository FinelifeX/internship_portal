import React from 'react';
import { Redirect } from 'react-router-dom';
import { StreamsRoutes, STREAMS_ROUTES_BASE } from '../../routes/streams';

const Streams = () => (
  <>
    <Redirect from={STREAMS_ROUTES_BASE} exact to={StreamsRoutes.Current} />
    <div>Streams</div>
  </>
);

export default Streams;
