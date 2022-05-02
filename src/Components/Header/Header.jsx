import "./Header.css";
import { useAuth } from '../../context/auth-context'
import { Link } from "react-router-dom";

const Header = () => {
  const { isUserLoggedIn, logoutUser  } = useAuth();

  return (
    <header className="header">
      <h1 className="title">Airpark</h1>
      <div className="avatar mr-5">
        <div className="big-font">{isUserLoggedIn ? <div onClick={logoutUser}>Logout</div>: <Link to="/login"> Login </Link>}</div>
      </div>
    </header>
  );
};

export default Header;
