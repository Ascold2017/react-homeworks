import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    const { isAuthorized, email } = this.props;
    return (
      <p className="footer-message t-footer">
        {isAuthorized ? `Вы вошли как ${email}` : 'Вы гость в этой системе'}
      </p>
    );
  }
}

export default () => (
  <AuthConsumer>
    {({ isAuthorized, email }) => (
      <Footer isAuthorized={isAuthorized} email={email} />
    )}
  </AuthConsumer>
);
