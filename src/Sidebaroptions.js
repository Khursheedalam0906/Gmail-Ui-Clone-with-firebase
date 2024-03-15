import { Icon } from "@material-ui/core";
import React from "react";
import "./css/Sidebaroptions.css";

const Sidebaroptions = ({ Icon, title, number, isActive }) => {
  return (
    <div className={`sidebaroptions ${isActive && "sidebaroptions__active"}`}>
      <Icon />
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
};

export default Sidebaroptions;
