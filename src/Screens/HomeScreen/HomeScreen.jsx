import { useEffect } from "react";
import { getPosts } from "../../actions/postsAction";
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

  console.log(postState);
  const renderposts = [...postState.posts].reverse();

  return (
    <div className="flex-row">
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
