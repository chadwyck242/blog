import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
/ The function calls below use ES2015 syntax that chain function calls
/ together as arrow functions.
/ This action creator can get access to all actions and all data in the store.
/ It is async, with the response variable having the await operator
*/
export const fetchPosts = () => async dispatch => {
  // returns something similar to a promise. using async /await syntax
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
