import react from "react";
import MenuIcon from "@material-ui/icons/Menu";
import GmailIcon from "./assets/Gmail-Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import "./css/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

const Header = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={GmailIcon} alt="GmailIcon" style={{ width: 30 }} />
        <p>Gmail</p>
      </div>
      <div className="header__middle">
        <div className="header__inputrapper">
          <SearchIcon />
          <input type="search" placeholder="Search mail" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        {user ? (
          <img
            src={user?.photoURL}
            alt="ProfilePic"
            style={{ width: 35, height: 35, borderRadius: 50 }}
            onClick={() => signOut(auth)}
          />
        ) : (
          <Avatar />
        )}
      </div>
    </div>
  );
};

export default Header;
