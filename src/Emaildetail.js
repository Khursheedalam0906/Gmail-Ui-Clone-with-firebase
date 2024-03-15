import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import PrintIcon from "@material-ui/icons/Print";
import LaunchIcon from "@material-ui/icons/Launch";
import "./css/HeaderSettings.css";
import "./css/Emaildetails.css";
import StarIcon from "@material-ui/icons/Star";
import ReplyIcon from "@material-ui/icons/Reply";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Emaildetail = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.mail.selectedMessage);
  console.log(data);
  return (
    <div className="emaildetail">
      <div className="headersettings">
        <div className="headersettings__left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
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
      <div className="emaildetails__message">
        <div className="emaildetails__header">
          <div className="emaildetails__headerLeft">
            <h4>{data?.subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emaildetails__headerRight">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__middleheader">
          <div className="emaildetails__middleheaderLeft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{data?.subject}</h4>
            <p>{data?.name}</p>
          </div>
          <div className="emaildetails__middleheaderRight">
            <p>{data?.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__body">
          <p>{data?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Emaildetail;
