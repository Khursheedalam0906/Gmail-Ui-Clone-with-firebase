import React from "react";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PeopleIcon from "@material-ui/icons/People";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import "./css/Emailtype.css";

const Emailtype = () => {
  return (
    <div className="emailtype">
      <div className="emailtype__options emailtype__options__isActive">
        <PhoneIphoneIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__options">
        <LoyaltyIcon />
        <p>Promotion</p>
      </div>
    </div>
  );
};

export default Emailtype;
