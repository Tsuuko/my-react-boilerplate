import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Inspector } from 'react-dev-inspector';
import ReactDOM from 'react-dom';
import { Outlet, Router } from 'react-location';

import { location, routes } from './Router';

const InspectorWrapper = import.meta.env.DEV ? Inspector : React.Fragment;

ReactDOM.render(
  <React.StrictMode>
    <InspectorWrapper keys={['control', 'space']}>
      <Router routes={routes} location={location}>
        <Outlet />
      </Router>
    </InspectorWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
