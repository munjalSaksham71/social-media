import axios from "axios";
import { useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import './UserProfileUpdate.css'
import { updateUser } from "../../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const UserProfileUpdate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const {userData, setUserData} = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await axios.get(`/api/users/${userData._id}`);
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setUsername(user?.username);
      setBio(user?.bio);
      setImageUrl(user?.imageUrl); 
    })();
  }, []);

  const uploadImageHandler = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "a8c6et5a");
    formData.append("cloud_name", "dniz23rju");
    fetch("https://api.cloudinary.com/v1_1/dniz23rju/image/upload",{
      method:"post",
      body: formData
      })
    .then(resp => resp.json())
    .then(data => {
      setImageUrl(data.url)
    })
    .catch(err => console.log(err))
  }

  const updateProfileHandler = async () => {
    try {
      const data = await updateUser(firstName, lastName, username, bio, imageUrl);
      localStorage.setItem("userData", JSON.stringify(data.user))
      setUserData(data.user);
      navigate("/profile"); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex-row content-align">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-column main-content">
        <div className="form">
          <div className="flex-row mt-2">
            <label className="mr-1" htmlFor="name">
              Firstname:
            </label>
            <input
              className="ml-1 field-input"
              type="text"
              value={firstName}
              placeholder="Enter your firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex-row mt-2">
            <label className="mr-1" htmlFor="name">
              Lastname:
            </label>
            <input
              className="ml-1 field-input"
              type="text"
              value={lastName}
              placeholder="Enter your lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex-row mt-2">
            <label className="mr-1" htmlFor="name">
              Bio:
            </label>
            <textarea
              rows={3}
              className="ml-1"
              type="text"
              value={bio}
              placeholder="Enter your Bio"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="flex-row mt-2">
            <label className="mr-1" htmlFor="image">Profile Picture: </label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={uploadImageHandler}  className="btn btn-outline-primary">save</button> 
          </div>
          {imageUrl && <img src={imageUrl} alt="Profile Picture" className="preview-image" />}
        </div>
        <div className="flex-row">
          <button onClick={updateProfileHandler} className="mt-2 btn btn-primary">Update</button>
          <Link to="/" className="mt-2 ml-2 btn btn-error">Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export { UserProfileUpdate };
