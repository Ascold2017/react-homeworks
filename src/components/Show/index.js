import React from 'react';
import './Show.css';
import { getShowInfo } from '../../api';

export default class Show extends React.Component {
  state = {
    data: null,
    showId: null
  };
  componentDidUpdate() {
    if (this.props.showId !== this.state.showId) {
      getShowInfo(this.props.showId).then(data => {
        this.setState({ data, showId: this.props.showId });
      });
    }
  }

  render() {
    return (
      <div className="show">
        {this.state.show ? (
          <img
            src={this.state.data.image.medium}
            className="show-image"
            alt="img"
          />
        ) : null}
      </div>
    );
  }
}
