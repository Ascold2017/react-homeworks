import React, { Component } from 'react';
import { getLoggedInUser } from '../utils';

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = WrappedComponent => {
  return ({ loading, ...other }) => loading ? <LoadingSpinner /> : <WrappedComponent {...other} />;
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/

export const addLoggedInUser = (WrappedComponent) => {
  const defaultUser = getLoggedInUser()
  return ({ user, ...other }) => {
    user = (JSON.stringify(user) === JSON.stringify(defaultUser)) ? user : defaultUser;
    return (<WrappedComponent user={user} {...other} />)
  }
};

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = (WrappedComponent) => {

  return ({ books }) => {
    books = books.sort((p, n) => p.title > n.title)
    return <WrappedComponent books={books} />
  }
};
