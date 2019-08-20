import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getSolNum,
  changeSol,
  fetchPhotosRequest
} from '../../modules/RoverPhotos';
import styles from './RoversViewer.module.css';
// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

class RoversViewer extends PureComponent {
  componentDidMount() {
    const { fetchPhotosRequest, sol } = this.props;
    fetchPhotosRequest({ sol, name: 'curiosity' });
  }
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>

        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    sol: getSolNum(state)
  }),
  {
    changeSol,
    fetchPhotosRequest
  }
)(RoversViewer);
