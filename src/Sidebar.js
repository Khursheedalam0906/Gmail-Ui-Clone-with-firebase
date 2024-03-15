import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./css/Sidebar.css";
import { Button } from "@material-ui/core";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarRateIcon from "@material-ui/icons/StarRate";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import LabelIcon from "@material-ui/icons/Label";
import DeleteIcon from "@material-ui/icons/Delete";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Compose from "./Compose";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="compose__btn"
        startIcon={<AddIcon />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <Sidebaroptions
        Icon={InboxIcon}
        title={"Inbox"}
        number={"24"}
        isActive={true}
      />
      <Sidebaroptions Icon={StarRateIcon} title={"Starred"} number={"24"} />
      <Sidebaroptions Icon={WatchLaterIcon} title={"Snoozed"} number={"26"} />
      <Sidebaroptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number={"45"}
      />
      <Sidebaroptions Icon={SendIcon} title={"Send"} number={"65"} />
      <Sidebaroptions Icon={DraftsIcon} title={"Draft"} number={"23"} />
      <Sidebaroptions Icon={LabelIcon} title={"Category"} number={"25"} />
      <Sidebaroptions Icon={DeleteIcon} title={"[Map]/Trash"} number={"93"} />
      <Sidebaroptions Icon={FindInPageIcon} title={"Document"} number={"36"} />
      <Sidebaroptions Icon={ExpandMoreIcon} title={"More"} number={"24"} />
      <hr
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <h4 className="sidebarOptions__heading">Meet</h4>
      <Sidebaroptions Icon={VideocamIcon} title={"New Meeting"} />
      <Sidebaroptions Icon={KeyboardIcon} title={"Join a Meeting"} />
    </div>
  );
};

export default Sidebar;
