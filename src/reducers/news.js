import * as actions from '../actions/newsAction'

const initialState = {
  news: [],
  errMsg: null,
  fetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.NEWS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case actions.NEWS_REQUEST_SUCCESS:
      return {
        ...state,
        news: action.news,
        fetching: false
      }    
    case actions.NEWS_REQUEST_ERROR:
      return {
        ...state,
        errMsg: action.errMsg,
        fetching: false
      }
    default:
      return state
  }
}