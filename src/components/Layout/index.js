import React from 'react';
import Layout from './Layout';
import { AuthConsumer } from '../../contexts/Auth';

export default ({ header, footer, children }) => (
  <AuthConsumer>
    {({ isAuthorized, logout, email }) => (
      <Layout
        header={header}
        footer={footer}
        isAuthorized={isAuthorized}
        logout={logout}
        email={email}
      >
        {children}
      </Layout>
    )}
  </AuthConsumer>
);
