import "./Hamburger.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Hamburger = () => {
  const { logoutUser } = useAuth();

  return (
    <div className="hamburger flex-column pt-3">
      <Link to="/" className="list_item flex-row p-3">
        Home
      </Link>
      <Link to="/users" className="list_item flex-row  p-3">
        People
      </Link>
      <Link to="/likes" className="list_item flex-row  p-3">
        Likes
      </Link>
      <Link to="/bookmarks" className="list_item flex-row  p-3">
        Bookmark
      </Link>
      <Link to="/followers" className="list_item flex-row  p-3">
        Followers
      </Link>
      <Link to="/profile" className="list_item flex-row  p-3">
        User Profile
      </Link>
      <button onClick={logoutUser} className="btn btn-primary mt-2 ml-2">
        Logout
      </button>
    </div>
  );
};

export default Hamburger;
