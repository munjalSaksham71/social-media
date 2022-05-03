import {
  AiOutlineHome,
  BsPeople,
  AiOutlineLike,
  CgProfile,
  RiUserFollowLine,
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
    name: "People",
    sidebarIcon: <BsPeople />,
    linkTo: "/users",
  },
  {
    id: 3,
    name: "Likes",
    sidebarIcon: <AiOutlineLike />,
    linkTo: "/likes",
  },
  {
    id: 4,
    name: "Bookmark",
    sidebarIcon: <BsBookmarks />,
    linkTo: "/bookmarks",
  },
  {
    id: 5,
    name: "Followers",
    sidebarIcon: <RiUserFollowLine />,
    linkTo: "/followers",
  },
  {
    id: 6,
    name: "Profile",
    sidebarIcon: <CgProfile />,
    linkTo: "/profile",
  },
];
