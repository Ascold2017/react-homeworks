import React from 'react';
import { Route, Link, matchPath } from 'react-router-dom';
import routes from '../../Constants/routes';
import classNames from 'classnames';
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
import MailList from '../MailList';
import Mail from '../Mail';
import Home from '../Home';
import _get from 'lodash/get';
import _find from 'lodash/find';

const AppNavLink = ({ name, path, className }) => (
  <li className={navElement}>
    <Link to={path} className={classNames(link, className)}>
      {name}
    </Link>
  </li>
);

const AppNav = ({ links }) => (
  <nav className={classNames(nav, 't-nav-list')}>
    <ul className={navList}>
      {links.map((link, i) => (
        <AppNavLink name={link.name} path={link.path} className={link.className} key={i} />
      ))}
    </ul>
  </nav>
);

const AppRouter = ({ location }) => {
  const links = [
    { name: 'Home', path: routes.app.home, isExact: true, className: 't-link-home' },
    { name: 'Inbox', path: routes.app.inbox, className: 't-link-inbox' },
    { name: 'Outbox', path: routes.app.outbox, className: 't-link-outbox' }
  ];

  const contentTitle = _get(
    links.find(link => matchPath(location.pathname, { path: link.path, exact: link.isExact })),
    'name',
    'Unknown'
  );

  return (
    <div className={wrapper}>
      <div className={container}>
        <AppNav links={links} />
        <div className={content}>
          <h3 className={title}>{contentTitle}</h3>
          <Route path={routes.app.home} exact component={Home} />
          <Route path={`${routes.app.home}/:type`} exact component={MailList} />
          <Route path={`${routes.app.home}/:type/:id`} component={Mail} />
        </div>
      </div>
    </div>
  );
};

export default AppRouter;
