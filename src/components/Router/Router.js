import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute'
import Login from '../Login';
import Search from '../Search'
import { root } from './Router.module.css'
// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

export default () => {
  return (
    <div className={root}>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/search" component={Search} />
        <Redirect to="/"/>
      </Switch>
    </div>
  );
};
