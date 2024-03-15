import React, { useState } from "react";
import "./css/Compose.css";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import HeightIcon from "@material-ui/icons/Height";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import PhotoIcon from "@material-ui/icons/Photo";
import PhonelinkIcon from "@material-ui/icons/Phonelink";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  console.log(user);

  const FormSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("Email is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }

    if (message === "") {
      return alert("Message is required");
    }
    addDoc(collection(db, "emails"), {
      to,
      subject,
      message,
      from: user.email,
      fromName: user.displayName,
      timestamp: serverTimestamp(),
    });
    setTo("");
    setSubject("");
    setMessage("");
    alert("Email Send Successfully");
    dispatch(closeSendMessage());
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveOutlinedIcon />
          <HeightIcon />
          <CloseOutlinedIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={FormSubmit}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type="to"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Your message"
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footerLeft">
            <button>
              Send <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footerRight">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
