import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (name, initData) => {
  return WrappedComponent => {
    class WithLocalStorage extends Component {
      state = {
        savedData: initData
      };
      componentDidMount() {
        const data = load(name) || initData;
        this.setState({ savedData: data });
      }
      saveData = data => {
        save(name, data);
        this.setState({ savedData: load(name) });
      };
      render() {
        return (
          <WrappedComponent
            {...this.props}
            savedData={this.state.savedData}
            saveData={this.saveData}
          />
        );
      }
    }

    return WithLocalStorage;
  };
};

export default withLocalstorage;
