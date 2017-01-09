import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound'
// import Users from './components/Users';
import About from './components/About';



export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
