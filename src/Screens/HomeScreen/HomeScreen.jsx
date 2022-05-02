import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SideBar from "../../Components/SideBar/SideBar";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="flex-row">
      <div className="flex-column">
        <ProfileCard />
        <SideBar />
      </div>
    </div>
  );
};

export { HomeScreen };
