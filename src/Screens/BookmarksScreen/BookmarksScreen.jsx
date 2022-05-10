import { useEffect } from "react";
import {
  getBookmarks,
  removeFromBookmark,
} from "../../actions/bookmarkActions";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import { useBookmarks } from "../../context/bookmark-context";
import { BsFillBookmarksFill } from "../../Components/Icon";
import "./BookmarkScreen.css";

const BookmarksScreen = () => {
  const {
    bookmarkState: { bookmarks },
    bookmarkDispatch,
  } = useBookmarks();

  useEffect(() => {
    (async () => {
      const { bookmarks } = await getBookmarks();
      bookmarkDispatch({ type: "GET_BOOKMARKS", payload: bookmarks });
    })();
  }, []);

  const removeFromBookmarkHandler = async (id) => {
    const { bookmarks } = await removeFromBookmark(id);
    bookmarkDispatch({ type: "REMOVE_FROM_BOOKMARKS", payload: bookmarks });
  };

  console.log(bookmarks);

  return (
    <div>
      <div className="flex-row content-align">
        <div className="flex-column">
          <ProfileCard />
          <SideBar />
        </div>
        <div className="flex-column main-content">
          <div className="heading3">Bookmarks</div>
          {bookmarks.map((bookmark) => (
            <div key={bookmark._id} className="bookmark-card">
              <div className="flex-row mb-2">
                <img
                  src="./images/img_avatar.png"
                  alt="image-avatar"
                  className="avatar_img"
                />
                <div className="flex-column ml-1 post-author">
                  <div>{bookmark.username}</div>
                  <div className="post-date">
                    {new Date(bookmark.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="post-author">{bookmark.content}</div>
              <div className="mt-1">
                <BsFillBookmarksFill
                  onClick={() => removeFromBookmarkHandler(bookmark._id)}
                  className="icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BookmarksScreen };
