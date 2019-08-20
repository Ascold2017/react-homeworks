import React from 'react';
import { connect } from 'react-redux';
import {
  searchPanel,
  previewList,
  input,
  buttonWrapper,
  button
} from './Search.module.css';
import {
  getSearchQuery,
  getIsLoadingShowsList,
  getShowsListError,
  getShowsList
} from '../../store/shows/selectors';
import { setSearchQuery, searchRequest } from '../../store/shows/actions';
import classNames from 'classnames';
import ShowPreview from '../ShowPreview';

class Search extends React.PureComponent {
  handleSearchInput = event => {
    const { value } = event.target;
    const { updateSearchQuery } = this.props;
    updateSearchQuery(value);
  };
  submitSearch = () => {
    const { searchQuery, getShows } = this.props;
    searchQuery && getShows();
  };
  render() {
    const { searchQuery, showsList, isLoadingShows, showsError } = this.props;
    return (
      <React.Fragment>
        <div className={previewList}>
          <input
            className={classNames(input, 't-input')}
            value={searchQuery}
            onChange={this.handleSearchInput}
          />
          <div className={buttonWrapper}>
            <button
              className={classNames(button, 't-search-button')}
              onClick={this.submitSearch}
            >
              Найти
            </button>
          </div>
        </div>
        <div className={classNames(searchPanel, 't-search-result')}>
          {isLoadingShows && <div>Loading...</div>}
          {showsError && <div>{showsError}</div>}
          {!isLoadingShows &&
            !showsError &&
            (showsList.length ? (
              showsList.map(show => (
                <ShowPreview
                  key={show.id}
                  {...{
                    image: show.image,
                    name: show.name,
                    id: show.id,
                    summary: show.summary
                  }}
                />
              ))
            ) : (
              <div>Not found!</div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: getSearchQuery(state),
  showsList: getShowsList(state),
  isLoadingShows: getIsLoadingShowsList(state),
  showsError: getShowsListError(state)
});

const mapDispatchToProps = {
  updateSearchQuery: setSearchQuery,
  getShows: searchRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
