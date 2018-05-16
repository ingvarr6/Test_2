import { fetchNews } from "../api/Api";

export const NEWS_REQUEST = "NEWS_REQUEST";
export const NEWS_REQUEST_SUCCESS = "NEWS_REQUEST_SUCCESS";
export const NEWS_REQUEST_ERROR = "NEWS_REQUEST_ERROR";


export function getNews() {
  return dispatch => {
    dispatch({
      type: NEWS_REQUEST
    });

    fetchNews().then(data => {
      if (data.status === "ok") {
        dispatch({
          type: NEWS_REQUEST_SUCCESS,
          news: data.data
        });
      } else {
        dispatch({
          type: NEWS_REQUEST_ERROR,
          errMsg: 'Что-то пошло не так, попробуйте позже'
        });
      }
    });
  };
}
