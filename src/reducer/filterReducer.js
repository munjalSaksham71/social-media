export const filterInitialState = {
  sortByDate: "",
  sortByLatestPosts: false,
  sortByTrendingPost: false,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return { ...state, sortByDate: action.payload };
    case "SORT_BY_LATEST_POSTS":
      return { ...state, sortByLatestPosts: !state.sortByLatestPosts };
    case "SORT_BY_TRENDING_POST":
      return { ...state, sortByTrendingPost: !state.sortByTrendingPost };
    case "CLEAR_FILTERS":
      return {
        sortByDate: "",
        sortByLatestPosts: false,
        sortByTrendingPost: false,
      };
    default:
      return state;
  }
};
