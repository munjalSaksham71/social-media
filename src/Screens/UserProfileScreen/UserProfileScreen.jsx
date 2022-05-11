import { useState, useEffect } from "react";
import { deletePost, getPostsFromUser } from "../../actions/postsAction";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import { useAuth } from "../../context/auth-context";
import { AiOutlineLike, FaTrash } from "../../Components/Icon";
import "./UserProfileScreen.css";
import { Link } from "react-router-dom";

const UserProfileScreen = () => {
  const [posts, setMyPosts] = useState([]);

  const { userData } = useAuth();

  useEffect(() => {
    (async () => {
      const {
        data: { posts },
      } = await getPostsFromUser(userData.username);
      setMyPosts(posts);
    })();
  }, []);

  const deleteHandler = async (id) => {
    const {
      data: { posts },
    } = await deletePost(id);
    setMyPosts(posts.filter((post) => post.username === userData.username));
  };

  return (
    <div className="flex-row content-align">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-column user-content">
        <div className="user-info flex-row">
          <img
            src={userData?.imageUrl}
            alt="Profile Picture"
            className="profile-image"
          />
          <div className="user-name flex-column mt-3 ml-3">
            <p>
              {userData?.firstName} {userData?.lastName}
            </p>
            <p>@{userData?.username}</p>
            <p>{userData?.bio}</p>
          </div>
          <Link to="/update-profile" className="btn edit-btn btn-primary ml-auto">
            Edit Profile
          </Link>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="user-posts flex-column">
          <div className="heading2 center"> MY POSTS </div>
          {posts.length === 0 && <div className="center mt-3"> No Posts </div>}
          {posts.map((post) => (
            <div key={post._id} className="flex-column">
              <div className="flex-row">
                <img
                  className="image-avatar"
                  src={userData?.imageUrl}
                  alt="Profile Picture"
                />
                <div className="ml-2 mt-1">{post.username}</div>
              </div>
              <div className="m-2">{post.content}</div>
              <div className="flex-row ml-2">
                <AiOutlineLike className="icon" />
                <FaTrash
                  onClick={() => deleteHandler(post._id)}
                  className="icon ml-2"
                />
              </div>
              <hr className="mb-2 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { UserProfileScreen };
