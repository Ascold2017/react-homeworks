import React from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = WrappedComponent => {
  return (props) => (
    <div style={{ position: 'absolute' }}>
      <WrappedComponent {...props} />
    </div>
  );
};
