import { createSelector } from 'reselect';
export const getIsLoadingUserInfo = state => state.user.isLoading;
export const getUserInfoData = createSelector(
  state => state.user.data,
  data => ({ image: data && data.avatar_url })
);
