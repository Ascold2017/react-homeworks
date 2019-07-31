import React from 'react';
import './Form.css';
import bondImage from './assets/bond_approve.jpg';
export default class Form extends React.Component {
  truthyValues = {
    firstname: 'james',
    lastname: 'bond',
    password: '007'
  };
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: [],

    isSuccess: false
  };

  changeField = event => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: []
    });
  };

  validateForm = () => {
    let errors = [];
    this.state.firstname
      ? this.state.firstname !== this.truthyValues.firstname &&
        errors.push({ field: 'firstname', text: 'Имя указано не верно' })
      : errors.push({ field: 'firstname', text: 'Нужно указать имя' });

    this.state.lastname
      ? this.state.lastname !== this.truthyValues.lastname &&
        errors.push({ field: 'lastname', text: 'Фамилия указана не верно' })
      : errors.push({ field: 'lastname', text: 'Нужно указать фамилию' });

    this.state.password
      ? this.state.password !== this.truthyValues.password &&
        errors.push({ field: 'password', text: 'Пароль указан не верно' })
      : errors.push({ field: 'password', text: 'Нужно указать пароль' });

    return errors;
  };

  submitForm = event => {
    event.preventDefault();
    const errors = this.validateForm();
    this.setState({
      isSuccess: !errors.length,
      errors
    });
  };

  render() {
    // Типа computed как в Vue
    const errorText = fieldName => {
      const fieldError = this.state.errors.find(err => err.field === fieldName);
      return fieldError && fieldError.text;
    };
    const form = (
      <form className="form" onSubmit={this.submitForm}>
        <h1>Пароль, Штирлиц!</h1>
        <div className="field">
          <label htmlFor="firstname" className="field__label">
            Firstname
          </label>
          <input
            id="firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={this.changeField}
            className="field__input field-input t-input-firstname"
          />
          <span className="field__error field-error t-error-firstname">
            {errorText('firstname')}
          </span>
        </div>
        <div className="field">
          <label htmlFor="lastname" className="field__label">
            Lastname
          </label>
          <input
            id="lastname"
            name="lastname"
            value={this.state.lastname}
            onChange={this.changeField}
            className="field__input field-input t-input-lastname"
          />
          <span className="field__error field-error t-error-lastname">
            {errorText('lastname')}
          </span>
        </div>
        <div className="field">
          <label htmlFor="password" className="field__label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.changeField}
            className="field__input field-input t-input-password"
          />
          <span className="field__error field-error t-error-password">
            {errorText('password')}
          </span>
        </div>
        <div className="form__buttons">
          <button type="submit" className="button t-submit">
            Проверить
          </button>
        </div>
      </form>
    );
    return (
      <div className="app-container">
        {this.state.isSuccess ? <img src={bondImage} alt="success" className="t-bond-image" /> : form}
      </div>
    );
  }
}
