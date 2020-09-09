import store from "./store";

const handleError = error => {
  const errorStatus = error ? error.status : error;
  const errorMessage = prepareErrorMessage(errorStatus);
  store.dispatch("populateErrors", errorMessage);
};

// Catch any error
// as seen here https://www.youtube.com/watch?v=9YkUCxvaLEk
export const wrapRequest = fn => (...params) =>
  fn(...params)
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch(error => handleError(error));

const prepareErrorMessage = status => {
  switch (status) {
    case 401:
      return "Nope, go away";
    case 422:
      return "Unprosomething entity";
    case 404:
      return "You're lost";
    case 405:
      return "Read the manual";
    default:
      return "Error, please try again later";
  }
};
