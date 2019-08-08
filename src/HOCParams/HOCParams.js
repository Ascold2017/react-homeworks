import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (data) => {
  return WrappedComponent => {
    class withGivenProps extends Component {
      render() {
        return <WrappedComponent {...data} />;
      }
    }
    return withGivenProps
  }
}
