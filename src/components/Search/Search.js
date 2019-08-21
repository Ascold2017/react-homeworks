import React, { PureComponent } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import { connect } from 'react-redux';
import { fetchUserInfo  } from '../../modules/User';
import { fetchFollowersInfo } from '../../modules/Followers';
import UserInfo from '../UserInfo';
import Followers from '../Followers';

class Search extends PureComponent {
  state = {
    user: 'Ascold2017'
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleKeyPress = event => {
    const { dispatch } = this.props;
    const { user } = this.state;

    if (event.key === 'Enter' && user.length > 0) {
      dispatch(fetchUserInfo(user))
      dispatch(fetchFollowersInfo(user))
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const { user } = this.state;

    return (
      <div className={styles.root}>
        <Input
          ref={this.input}
          value={user}
          className='t-search-input'
          placeholder="Ник пользователя"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <UserInfo />
        <Followers />
      </div>
    );
  }
}

export default connect(null, null)(Search);
