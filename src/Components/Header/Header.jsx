import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Airpark</h1>
      <div className="avatar mr-2">
        <img className="avatar rounded-corner" src="./images/img_avatar.png" alt="image avatar" />
      </div>
    </header>
  );
};

export default Header;
