import "./Header.css";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, FaTimes } from "../Icon";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isUserLoggedIn, logoutUser } = useAuth();

  return (
    <header className="header">
      <div className="hamburger-menu">
        <div className="hamburger-icons">
          {!isOpen ? (
            <GiHamburgerMenu className="icon" onClick={() => setIsOpen(true)} />
          ) : (
            <FaTimes className="icon" onClick={() => setIsOpen(false)} />
          )}
        </div>
        {isOpen && (
          <div className="hamburger-content">
            <Hamburger />
          </div>
        )}
      </div>
      <Link to="/" className="title text-style">Airpark</Link>
      <div className="avatar mr-5">
        <div className="big-font">
          {isUserLoggedIn ? (
            <div onClick={logoutUser}>Logout</div>
          ) : (
            <Link to="/login"> Login </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
