import { connect } from 'react-redux'
import News from '../Components/News.js'
import { getNews} from '../actions/newsAction'

const mapStateToProps = (state, ownProps) => {
  return {
    news: state.news.news,
    errMsg: state.news.errMsg,
    fetching: state.news.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(getNews())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(News)