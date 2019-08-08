import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const submit = e => {
    e.preventDefault();
    if (password && email) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={submit}>
      { isSuccess ? <span data-testid="success-message">Вы вошли</span> : null }
      <input value={email} onChange={setEmail} data-testid="email-input" />
      <input
        value={password}
        onChange={setPassword}
        type="password"
        data-testid="password-input"
      />
      <button type="submit" data-testid="submit">
        Submit
      </button>
    </form>
  );
};
