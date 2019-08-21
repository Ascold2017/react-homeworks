import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getSolNum,
  getRoverPhotos,
  changeSol,
  fetchPhotosRequest
} from '../../modules/RoverPhotos';
import styles from './RoversViewer.module.css';
import {
  Slider,
  Card,
  CardContent,
  GridList,
  GridListTile,
  ListSubheader
} from '@material-ui/core';
import { styled } from '@material-ui/styles';
const FormCard = styled(Card)({
  width: 500,
  margin: '20px 0 40px'
});
const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  display: 'block'
});
const FormTitle = styled('div')({
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '10px'
})

class RoversViewer extends PureComponent {
  componentDidMount() {
    const { fetchPhotosRequest, sol } = this.props;
    fetchPhotosRequest({ sol, name: 'curiosity' });
    fetchPhotosRequest({ sol, name: 'opportunity' });
    fetchPhotosRequest({ sol, name: 'spirit' });
  }
  handleChangeSol = (e, value) => {
    const { changeSol } = this.props;
    changeSol(value);
  };
  handleCommitSol = (e, value) => {
    const { fetchPhotosRequest } = this.props;
    fetchPhotosRequest({ sol: value, name: 'curiosity' });
    fetchPhotosRequest({ sol: value, name: 'opportunity' });
    fetchPhotosRequest({ sol: value, name: 'spirit' });
  };

  renderLoadingTile(key) {
    return <GridListTile key={key}>Loading..</GridListTile>;
  }
  renderPhotoTiles(images) {
    return images.map(photo => (
      <GridListTile key={photo.id}>
        <Img src={photo.img_src} alt={photo.id} key={photo.id} />
      </GridListTile>
    ));
  }
  render() {
    const { sol, photos } = this.props;
    const columns = Object.keys(photos).map(key => ({
      id: key,
      value: photos[key]
    }));
    const columnRows = column =>
      Object.keys(column.value).map(key => ({
        id: key,
        value: column.value[key]
      }));

    return (
      <div className={styles.root}>
        <FormCard>
          <CardContent>
            <Slider
              min={1}
              max={100}
              value={sol}
              onChange={this.handleChangeSol}
              onChangeCommitted={this.handleCommitSol}
            />
            <FormTitle>Sol: {sol}</FormTitle>
          </CardContent>
        </FormCard>
        <div className={styles.сontainer}>
          {columns.map(col => (
            <GridList key={col.id} cellHeight={200} spacing={1} style={{width: '33%'}}>
              <ListSubheader component="h4">{col.id}</ListSubheader>
              {columnRows(col).map(row => {
                if (row.value.isLoading) return this.renderLoadingTile(row.id);
                if (row.value.isLoaded)
                  return this.renderPhotoTiles(row.value.photos);
                return null;
              })}
            </GridList>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    sol: getSolNum(state),
    photos: getRoverPhotos(state)
  }),
  {
    changeSol,
    fetchPhotosRequest
  }
)(RoversViewer);
