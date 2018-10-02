import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import NotFound from './NotFound';

const routes = (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default routes;
