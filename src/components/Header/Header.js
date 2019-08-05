import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    const { logout, email } = this.props;
    return (
      <div className="header-menu">
        <p className="header-menu__email t-header-email">{email}</p>
        <Button className="t-logout" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default () => (
  <AuthConsumer>
    {({ email, logout, isAuthorized }) => (
      isAuthorized && <Header email={email} logout={logout} isAuthorized={isAuthorized} />
    )}
  </AuthConsumer>
);
