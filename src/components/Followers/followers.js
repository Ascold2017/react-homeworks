import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {
  getIsLoadingFollowers,
  getFollowersList
} from '../../modules/Followers/selectors';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { isLoading, list } = this.props;
    if (!isLoading && !list.length) return null;
    if (isLoading) return <div>Loading...</div>;
    return (
      <div className={cx(styles.root, 't-followers')}>
        {list.map(follower => (
          <div className={styles.follower}>
            <img
              src={follower.image}
              className={styles.followerImg}
              alt={follower.name}
            />
            <span className={follower.followerLogin}>{follower.name}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  isLoading: getIsLoadingFollowers(state),
  list: getFollowersList(state)
}))(Followers);
