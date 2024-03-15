import React from "react";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./css/HeaderSettings.css";

const HeaderSettings = () => {
  return (
    <div className="headersettings">
      <div className="headersettings__left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="headersettings__right">
        <p>1-50 12.21</p>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HeaderSettings;
