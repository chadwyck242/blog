import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
/ The function calls below use ES2015 syntax that chain function calls
/ together as arrow functions.
/ This action creator can get access to all actions and all data in the store.
/ It is async, with the response variable having the await operator
*/

// action creator to fetch all the posts
export const fetchPosts = () => async dispatch => {
  // returns something similar to a promise. using async /await syntax
  const response = await jsonPlaceholder.get("/posts");

  // for the API payload response, we only want the data property
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// action creator to fetch a single user to be linked to a post
// an id of the user we want to fetch will be passed in
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
