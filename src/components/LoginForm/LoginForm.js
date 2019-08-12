import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import {
  bg,
  form,
  labelText,
  input,
  buttons,
  button,
  error
} from './LoginForm.module.css';
import classNames from 'classnames';
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

const LoginForm = class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };
  submitForm = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    event.preventDefault();
    this.props
      .authorize(email, password)
      .then(() => {
        console.log('Authorize!')
        history.push('/app')
      })
      .catch(() => null);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.props);
    const { authError } = this.props;
    const { email, password } = this.state;
    return (
      <div className={bg}>
        <form className={classNames(form, 't-form')} onSubmit={this.submitForm}>
          <p>
            <label htmlFor="email">
              <span className={labelText}>Почта</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={classNames(input, 't-input-email')}
              value={email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={labelText}>Пароль</span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={classNames(input, 't-input-password')}
              value={password}
              onChange={this.handleChange}
            />
          </p>
          {authError && <p className={error}>{authError}</p>}
          <div className={buttons}>
            <button type="submit" className={classNames(button, 't-submit')}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default withAuth(LoginForm);
