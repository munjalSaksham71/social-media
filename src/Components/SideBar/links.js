import {
  AiOutlineHome,
  BsPeople,
  CgProfile,
  MdOutlineExplore,
  BsBookmarks,
} from "../Icon";

export const links = [
  {
    id: 1,
    name: "Home",
    sidebarIcon: <AiOutlineHome />,
    linkTo: "/",
  },
  {
    id: 2,
    name: "Explore",
    sidebarIcon: <MdOutlineExplore />,
    linkTo: "/explore",
  },
  {
    id: 3,
    name: "People",
    sidebarIcon: <BsPeople />,
    linkTo: "/users",
  },
  {
    id: 4,
    name: "Bookmark",
    sidebarIcon: <BsBookmarks />,
    linkTo: "/bookmarks",
  },
  {
    id: 5,
    name: "Profile",
    sidebarIcon: <CgProfile />,
    linkTo: "/profile",
  },
];
