import React from 'react';
import { cast } from './ShowPage.module.css';
import { connect } from 'react-redux';
import {
  getShow,
  getShowError,
  getIsLoadingShow
} from '../../store/shows/selectors'
import {
  fetchShowRequest
} from '../../store/shows/actions'
class ShowPage extends React.PureComponent {
  componentDidMount () {
    const { getShow, match } = this.props
    getShow(match.params.id)
  }
  render () {
    const { isLoading, error, show } = this.props
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!show) return null
    return (
      <div>
        <p>{show.name}</p>
        <img src={show.image} alt={show.name} />
        <div>
          <p dangerouslySetInnerHTML={{__html: show.summary}}></p>
        </div>
        <div className={cast}>
          {show.casts.map(cast => (
            <div className="t-person" key={cast.id}>
              <p>{cast.name}</p>
              <img src={cast.image} alt={cast.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  isLoading: getIsLoadingShow(state),
  error: getShowError(state),
  show: getShow(state)
})

const mapDispatchToProps = {
  getShow: fetchShowRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)
