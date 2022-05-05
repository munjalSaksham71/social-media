import { useEffect } from "react";
import { getPosts } from "../../actions/postsAction";
import Hamburger from "../../Components/Hamburger/Hamburger";
import PostContent from "../../Components/PostContent/PostContent";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import ViewContent from "../../Components/ViewContent/ViewContent";
import { usePosts } from "../../context/posts-context";
import "./HomeScreen.css";

const HomeScreen = () => {

  useEffect(() => {
    (async() => {
      const data = await getPosts();
      await postDispatch({type: 'GET_POSTS', payload: data.posts})
     })()
  },[])

  const { postState, postDispatch } = usePosts();

  const renderposts = [...postState.posts].reverse();

  return (
    <div className="flex-row content-align">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-column main-content">
        <PostContent />
        <ViewContent posts={renderposts} />
      </div>
    </div>
  );
};

export { HomeScreen };
