import * as actions from '../actions/userInfoAction'

const initialState = {
  city: '',
  languages: [],
  social: [],
  errMsg: null,
  fetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case (actions.USER_INFO_REQUEST):
      return{
        ...state,
        fetching: true
      }
    case actions.USER_INFO_SUCCESS:
      return {
        ...state,
        city: action.payload.city,
        languages: action.payload.languages,
        social: action.payload.social,
        fetching: false
      }
    case actions.USER_INFO_ERROR:
      return {
        ...state,
        errMsg: action.payload.errMsg,
        fetching: false
      }
    default:
      return state
  }
}