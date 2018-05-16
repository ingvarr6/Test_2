import { fetchUserInfo } from "../api/Api";

export const USER_INFO_REQUEST = "USER_INFO_REQUEST";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_ERROR = "USER_INFO_ERROR";

export function getUserInfo(id) {
  return dispatch => {
    dispatch({
      type: USER_INFO_REQUEST
    })
    
    fetchUserInfo(id).then(response => {
      if (response.status === "ok") {
        dispatch({
          type: USER_INFO_SUCCESS,
          payload: {
            city: response.data.city,
            languages: response.data.languages,
            social: response.data.social
          }
        });
      } else {
        dispatch({
          type: USER_INFO_ERROR,
          payload: {
            errMsg: response.message
          }
        });
      }
    });
  };
}
