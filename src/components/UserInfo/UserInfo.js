import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { isLoadingUserInfo, userInfoData } from '../../modules/User'
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { isLoading, user } = this.props;
    if (!isLoading && !user.image) return null
    if (isLoading) return (<div>Loading...</div>);
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img src={user.image} className={styles.image} alt=""/>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  isLoading: isLoadingUserInfo(state),
  user: userInfoData(state)
}))(UserInfo);
