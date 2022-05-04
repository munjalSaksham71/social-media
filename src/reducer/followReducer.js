export const followerInitialState = {
  following: []
};

export const followReducer = (state, action) => {
  switch (action.type) {
    case "FOLLOW":
    case "UNFOLLOW":
      return { ...state, following: action.payload };
    case "CLEAR_DATA": 
    return {...state, following: []}
    default:
      return state;
  }
};
