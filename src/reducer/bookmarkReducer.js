export const bookmarkInitialState = {
  bookmarks: [],
};

export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKMARKS":
    case "ADD_TO_BOOKMARKS":
    case "REMOVE_FROM_BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "CLEAR_BOOKMARKS":
      return { bookmarkInitialState };
    default:
      return state;
  }
};
