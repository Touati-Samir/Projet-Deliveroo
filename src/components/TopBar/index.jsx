import Logo from "../Logo";
import "./top-bar.css";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="TopBar--center">
        <Logo />
      </div>
    </div>
  );
};

export default TopBar;
