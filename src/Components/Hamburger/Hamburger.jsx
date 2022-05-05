import "./Hamburger.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { links } from "../SideBar/links";

const Hamburger = () => {
  const { logoutUser } = useAuth();

  return (
    <div className="hamburger flex-column pt-3">
      {links.map((link) => {
        const { id, name, sidebarIcon, linkTo } = link;
        return (
          <Link key={id} to={linkTo} className="list_item flex-row p-3">
            {sidebarIcon} {name}
          </Link>
        );
      })}
      <button onClick={logoutUser} className="btn btn-primary mt-2 ml-2">
        Logout
      </button>
    </div>
  );
};

export default Hamburger;
