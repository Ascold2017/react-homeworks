import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage'

import './AppRouter.css';

export default () => {
  return (
    <div className="App">
      <Switch>
        <Redirect from="/" to="/show" exact />
        <Route path="/show" exact component={Search} />
        <Route path="/show/:id" component={ShowPage} />
      </Switch>
    </div>
  );
};
