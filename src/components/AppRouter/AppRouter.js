import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';

import { App } from './AppRouter.css';

export default () => {
  return (
    <div className={App}>
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </div>
  );
};
