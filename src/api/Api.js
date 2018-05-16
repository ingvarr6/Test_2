export const checkCredentials = params => {
  return fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
    body: JSON.stringify(params),
    headers: {
      "content-Type": "application/json"
    },
    method: "POST"
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const fetchUserInfo = userId => {
  return fetch(
    `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${userId}`
  )
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const fetchNews = () => {
  return fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news")
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
