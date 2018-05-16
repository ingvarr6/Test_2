import { checkCredentials } from "../api/Api";
import { errorConstants } from "./errorConstants";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export function logIn(params, cb) {
  return dispatch => {
    dispatch({
      type: LOG_IN_REQUEST
    });

    checkCredentials(params).then(data => {
      if (data.status === "ok") {
        dispatch({
          type: LOG_IN_SUCCESS,
          payload: {
            name: params.username,
            userId: data.data.id
          }
        });
        cb();
        localStorage["user"] = JSON.stringify({ userId: data.data.id });
      } else {
        const error = errorConstants[data.message] || "Сервер не доступен";
        dispatch({
          type: LOG_IN_FAILURE,
          payload: {
            errMsg: error
          },
          error: true
        });
      }
    });
  };
}

export function LogOut() {
  delete localStorage["user"];
  return dispatch => {
    dispatch({
      type: LOG_OUT
    });
  };
}
