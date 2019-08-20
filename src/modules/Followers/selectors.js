import { createSelector } from 'reselect';

export const getIsLoadingFollowers = state => state.followers.isLoading;
export const getFollowersList = createSelector(
  state => state.followers.data,
  followers =>
    followers.map(follower => ({
      image: follower.avatar_url,
      name: follower.login
    }))
);
