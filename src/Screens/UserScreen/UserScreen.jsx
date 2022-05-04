import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import { useFollower } from "../../context/follower-context";
import "./UserScreen.css";
import { followUser, unfollowUser } from "../../actions/followActions";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const user_profile = jwt_decode(localStorage.getItem("user_token"));

  const { followState, followDispatch } = useFollower();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users");
      setUsers(data.users);
    })();
  }, []);

  const unfollowHandler = async (id) => {
    const data = await unfollowUser(id);
    followDispatch({type: "UNFOLLOW", payload: data.data.user.following})
  }

  const followHandler = async (id) => {
    const data = await followUser(id);
    followDispatch({type: "FOLLOW", payload: data.data.user.following})
  }

  const filteredUsers = users.filter(
    (user) => user.username !== user_profile.username
  );

  return (
    <div className="flex-row content-align">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-column main-content">
        {filteredUsers.map((user) => {
          return (
            <div key={user._id} className="profile-card flex-column">
              <div className="flex-row">
                <img src="./images/img_avatar.png" className="profile-avatar" />
                <div className="ml-1 flex-column">
                  <div>{`${user.firstName} ${user.lastName}`}</div>
                  <div>{`@${user.username}`}</div>
                </div>
                <div className="ml-auto">
                  {followState.following.some( item => item._id === user._id) ? (
                    <button
                      onClick={() => unfollowHandler(user._id)}
                      className="btn btn-error mr-2"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => followHandler(user._id)}
                      className="btn btn-primary mr-2"
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { UserScreen };
