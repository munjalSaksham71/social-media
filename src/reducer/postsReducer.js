export const postsinitialState = {
  posts: [],
};

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
    case "CREATE_POST":
    case "DELETE_POST":
    case "LIKE_POST":
    case "DISLIKE_POST": 
      return { ...state, posts: action.payload };
    default:
      return { ...state };
  }
};
