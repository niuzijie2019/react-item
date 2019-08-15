import React from 'react';
import Detail from '@/views/Detail';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path = "/detail/:id" component = { Detail } />
  </Switch>
)
