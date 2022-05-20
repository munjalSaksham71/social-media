import Card from "../Card/Card";
import { useFilters } from "../../context/filter-context";

const Filters = () => {
  const {
    filterState: { sortByDate, sortByLatestPosts, sortByTrendingPost },
    filterDispatch,
  } = useFilters();

  return (
    <Card>
      <div className="flex-column">
        <div>FILTERS</div>
        <hr className="mt-1 mb-1" />
        <div>Sort By Date </div>
        <div className="flex-row mt-1">
          <input
            className="mr-1"
            type="radio"
            value="LOW_TO_HIGH"
            name="price"
            checked={sortByDate === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "LOW_TO_HIGH" })
            }
          />
          ASCENDING
        </div>
        <div className="flex-row mt-1">
          <input
            className="mr-1"
            type="radio"
            value="HIGH_TO_LOW"
            name="price"
            checked={sortByDate === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "HIGH_TO_LOW" })
            }
          />
          DESCENDING
        </div>
        <hr className="mt-1 mb-1" />
        <div>
          <div className="flex-row mt-1">
            <input
              className="mr-1"
              type="checkbox"
              checked={sortByLatestPosts}
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY_LATEST_POSTS",
                })
              }
            />
            Latest Posts
          </div>
          <div className="flex-row mt-1">
            <input
              className="mr-1"
              type="checkbox"
              checked={sortByTrendingPost}
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY_TRENDING_POST",
                })
              }
            />
            Trending Posts
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Filters;
