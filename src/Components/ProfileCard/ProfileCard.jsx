import { useFollower } from "../../context/follower-context";
import Card from "../Card/Card";
import "./ProfileCard.css";

const ProfileCard = () => {
  const {
    followState: { following }
  } = useFollower();

  const userData = JSON.parse(localStorage.getItem("userData"))

  return (
    <Card>
      <div className="flex-row mb-5 align-card">
        <img
          className="avatar avatar_img"
          src="./images/img_avatar.png"
          alt="image-avatar"
        />
        <div className="flex-column profile_info">
          <div className="profile_name">{`${userData.firstName} ${userData.lastName} `}</div>
          <div className="profile_username">{userData.username}</div>
          <div className="flex-row profile-summary">
            <div className="profile-following">
              {following.length} Following
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
