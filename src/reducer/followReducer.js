export const followerInitialState = {
  following: [], 
  followers: []
};

export const followReducer = (state, action) => {
  switch (action.type) {
    case "FOLLOW":
    case "UNFOLLOW":
    case "GET_USER_FOLLOWING":
      return { ...state, following: action.payload };
    case "GET_USER_FOLLOWERS":
      return {...state, followers: action.payload}
    case "CLEAR_DATA": 
    return {...state, following: []}
    default:
      return state;
  }
};
