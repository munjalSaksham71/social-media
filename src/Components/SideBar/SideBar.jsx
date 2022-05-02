import Card from "../Card/Card";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { links } from "./links";

const SideBar = () => {
  return (
    <div className="card-top">
      <Card>
        <div className="flex-column">
          {links.map((link) => {
            const { id, linkTo, sidebarIcon, name } = link;
            return (
              <div key={id}>
                <NavLink
                  to={linkTo}
                  className="flex-row sidebar_item link-item"
                >
                  {sidebarIcon} {name}
                </NavLink>
                <div className={id !== links.length ? "line" : ""}></div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
