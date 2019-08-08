import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || 'Component';
}

export const withDisplayName = WrappedComponent => {
  class withDisplayName extends Component {
    render() {
      return <WrappedComponent />;
    }
  }

  withDisplayName.displayName = `HOC${getDisplayName(WrappedComponent)}`;

  return withDisplayName;
};
