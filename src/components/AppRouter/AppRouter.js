import React, { Component } from 'react';
import {
  wrapper,
  container,
  nav,
  navList,
  navElement,
  link,
  content,
  title
} from './AppRouter.module.css';
import classNames from 'classnames';
import { Route, Link } from 'react-router-dom';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import Home from '../Home';
import _get from 'lodash/get';
import _find from 'lodash/find';

const AppNavLink = ({ name, path }) => (
  <li className={navElement}>
    <Link to={path} className={link}>
      {name}
    </Link>
  </li>
);

const AppNav = ({ links }) => (
  <nav className={nav}>
    <ul className={navList}>
      {links.map((link, i) => (
        <AppNavLink name={link.name} path={link.path} key={i} />
      ))}
    </ul>
  </nav>
);

const AppContent = ({ contentTitle, matchPath }) => (
  <div className={content}>
    <h3 className={title}>{contentTitle}</h3>
    <Route path={`${matchPath}/`} isExact={true} component={Home} />
    <Route path={`${matchPath}/inbox`} component={InboxList} />
  </div>
);

const AppRouter = ({ location, match }) => {
  const links = [
    { name: 'Home', path: `${match.url}` },
    { name: 'Inbox', path: `${match.url}/inbox` },
    { name: 'Outbox', path: `${match.url}/outbox` }
  ];

  const contentTitle = _get(
    _find(links, { path: match.url }),
    'name',
    'Unknown'
  );

  return (
    <div className={wrapper}>
      <div className={container}>
        <AppNav links={links} />
        <AppContent contentTitle={contentTitle} matchPath={match.path}/>
      </div>
    </div>
  );
};

export default AppRouter;
