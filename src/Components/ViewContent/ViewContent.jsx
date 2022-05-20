import "./ViewContent.css";
import {
  AiOutlineLike,
  AiFillLike,
  BsBookmarks,
  BsFillBookmarksFill,
  FaRegComment,
} from "../Icon";
import { dislikePost, likePost } from "../../actions/likesAction";
import jwt_decode from "jwt-decode";
import { usePosts } from "../../context/posts-context";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../actions/bookmarkActions";
import { useBookmarks } from "../../context/bookmark-context";
import { Link } from "react-router-dom";
import { useFilters } from "../../context/filter-context";

const ViewContent = ({ posts }) => {
  const { postDispatch } = usePosts();
  const {
    bookmarkState: { bookmarks },
    bookmarkDispatch,
  } = useBookmarks();

  const {
    filterState: { sortByDate, sortByLatestPosts, sortByTrendingPost },
  } = useFilters();

  const user = jwt_decode(localStorage.getItem("user_token"));

  const addToLikeHandler = async (id) => {
    const data = await likePost(id);
    postDispatch({ type: "LIKE_POST", payload: data.posts });
  };

  const addToDislikeHandler = async (id) => {
    const data = await dislikePost(id);
    postDispatch({ type: "DISLIKE_POST", payload: data.posts });
  };

  const addToBookmarksHandler = async (id) => {
    const { bookmarks } = await addToBookmark(id);
    bookmarkDispatch({ type: "ADD_TO_BOOKMARKS", payload: bookmarks });
  };

  const removeFromBookmarkHandler = async (id) => {
    const { bookmarks } = await removeFromBookmark(id);
    bookmarkDispatch({ type: "REMOVE_FROM_BOOKMARKS", payload: bookmarks });
  };

  const filterPosts = () => {
    let filteredPosts = posts;

    if (sortByDate) {
      filteredPosts = filteredPosts.sort((a, b) =>
        sortByDate === "LOW_TO_HIGH"
          ? a.createdAt.localeCompare(b.createdAt)
          : b.createdAt.localeCompare(a.createdAt)
      );
    }

    if (sortByLatestPosts) {
      filteredPosts = filteredPosts.sort((a,b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
    }

    if (sortByTrendingPost) {
      filteredPosts = filteredPosts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    }

    return filteredPosts;
  };

  const filteredPostsList = filterPosts();

  return (
    <div className="flex-column align-post">
      {filteredPostsList.map((post) => {
        return (
          <div key={post._id} className="post-content">
            <div className="flex-row mb-2">
              <img
                src="./images/img_avatar.png"
                alt="image-avatar"
                className="avatar_img"
              />
              <div className="flex-column ml-1">
                <div className="post-author">{post.username}</div>
                <div className="post-date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="post-author">{post.content}</div>
            <div className="post-likeCount mt-3 mb-2">
              {post.likes.likeCount} Likes
            </div>
            <div className="flex-row icons mt-1">
              <div>
                {post.likes.likedBy.some(
                  (item) => item.username === user.username
                ) ? (
                  <AiFillLike
                    onClick={() => addToDislikeHandler(post._id)}
                    className="icon"
                  />
                ) : (
                  <AiOutlineLike
                    onClick={() => addToLikeHandler(post._id)}
                    className="icon"
                  />
                )}
              </div>
              <div>
                {bookmarks.some((bookmark) => bookmark._id === post._id) ? (
                  <BsFillBookmarksFill
                    onClick={() => removeFromBookmarkHandler(post._id)}
                    className="icon ml-2"
                  />
                ) : (
                  <BsBookmarks
                    onClick={() => addToBookmarksHandler(post._id)}
                    className="icon ml-2"
                  />
                )}
              </div>
              <Link to={`/post/${post._id}`}>
                <FaRegComment className="text-none icon ml-2" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewContent;
