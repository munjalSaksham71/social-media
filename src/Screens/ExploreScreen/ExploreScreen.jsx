import ProfileCard from "../../Components/ProfileCard/ProfileCard"
import SideBar from "../../Components/SideBar/SideBar"
import ViewContent from "../../Components/ViewContent/ViewContent"
import { usePosts } from "../../context/posts-context";

const ExploreScreen = () => {
    
    const { postState } = usePosts();

    const renderposts = [...postState.posts].reverse();

    return (
        <div className="flex-row content-align">
        <div className="flex-column">
          <ProfileCard />
          <SideBar />
        </div>
        <div className="flex-column main-content">
            <ViewContent posts={renderposts} />
        </div>
        </div>
    )
}

export {ExploreScreen}
