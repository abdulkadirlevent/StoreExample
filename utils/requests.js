import { wrapRequest } from "./helpers";

const requestWithSuccess = () =>
  fetch("https://jsonplaceholder.typicode.com/users");

const requestWithError = () =>
  fetch("https://jsonplaceholder.typicode.com/users_noop");

export const wrappedRequestWithSuccess = wrapRequest(requestWithSuccess);
export const wrappedRequestWithError = wrapRequest(requestWithError);
