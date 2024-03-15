import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import "./css/Emailbody.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "./features/mailSlice";

const Emailbody = ({ name, subject, message, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Mailnavigate = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div>
      <div className="emailbody" onClick={(e) => Mailnavigate()}>
        <div className="emailbody__left">
          <CheckBoxOutlineBlankIcon />
          <StarBorderIcon />
          <LabelOutlinedIcon />
          <h5>{name}</h5>
        </div>
        <div className="emailbody__middle">
          <div className="emailbody__middle__msg">
            <p>
              <b>{subject}</b> {message.substring(0, 70) + "..."}
            </p>
          </div>
        </div>
        <div className="emailbody__right">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Emailbody;
