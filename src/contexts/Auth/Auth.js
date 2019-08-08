import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  truthyData = {
    email: 'stu@dent.com',
    password: '123'
  };

  getProviderValue = () => ({
    isAuthorized: this.state.isAuthorized,
    email: this.state.email,
    authorizeError: this.state.authorizeError,
    authorize: this.authorize,
    logout: this.logout
  });

  authorize = (email, password) => {
    const { email: truthyEmail, password: truthyPassword } = this.truthyData
    
    if (email !== truthyEmail || password !== truthyPassword) {
      this.setState({ authorizeError: 'Email или пароль введён не верно' })
    } else {
      this.setState({ isAuthorized: true, email, authorizeError: '' })
    }
  };

  logout = () => {
    this.setState({ isAuthorized: false, email: '', authorizeError: '' })
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
