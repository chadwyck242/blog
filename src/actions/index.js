import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  await jsonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS"
  };
};
