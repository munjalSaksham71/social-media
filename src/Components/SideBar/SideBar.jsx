import Card from '../Card/Card';
import './SideBar.css';
import { AiOutlineHome, BsPeople, AiOutlineLike, CgProfile, RiUserFollowLine } from '../Icon'
import { NavLink } from 'react-router-dom';

const links = [
    {
        id: 1,
        name: 'Home', 
        sidebarIcon: <AiOutlineHome />,
        linkTo: "/"
    }, 
    {
        id: 2,
        name: 'People', 
        sidebarIcon: <BsPeople />,
        linkTo: "/users"
    },
    {
        id: 3,
        name: 'Liked Videos', 
        sidebarIcon: <AiOutlineLike />,
        linkTo: "/likes"
    },
    {
        id: 4,
        name: 'Followers', 
        sidebarIcon: <RiUserFollowLine />,
        linkTo: "/followers"
    },
    {
        id: 5,
        name: 'Profile', 
        sidebarIcon: <CgProfile />,
        linkTo: "/profile"
    },
]

const SideBar = () => {
    return (
        <Card>
            <div className="flex-column">
                {links.map((link) => {
                    const { id, linkTo, sidebarIcon, name } = link;
                    return <div key={id}>
                        <NavLink to={linkTo} className="flex-row sidebar_item link-item" >{sidebarIcon} {name}</NavLink>
                        <div className={id !== links.length ? "line": "" }></div>
                    </div>
                    })}
            </div>
        </Card>
    )
}

export default SideBar
