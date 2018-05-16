import * as actions from "../actions/authAction";

const userStorage =
  localStorage["user"] !== undefined
    ? JSON.parse(localStorage["user"])
    : { userId: null };

const initialState = {
  user: userStorage,
  errMsg: "",
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        user: {
          name: action.payload.name,
          userId: action.payload.userId
        },
        errMsg: "",
        fetching: false
      };
    case actions.LOG_OUT:
      return {
        ...state,
        user: { userId: null },
        userId: null,
        errMsg: ""
      };
    case actions.LOG_IN_FAILURE:
      return {
        ...state,
        errMsg: action.payload.errMsg,
        fetching: false
      };
    default:
      return state;
  }
};
