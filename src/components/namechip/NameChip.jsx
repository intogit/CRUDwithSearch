import React, { useState } from "react";
import "./NameChip.css";
import { MdOutlineClose } from "react-icons/md";


const NameChip = (props) => {
  const deleteuser = (event) => {
    event.preventDefault();
    console.log("deleted");
    console.log(props.details.id);
    props.deleteOneUser(props.details.id);
  };

  return (
    <div>
      <div className="name-chip d-flex">
        <div className="name_in_chip">{props.details.fname + " " + props.details.lname}</div>
        <div className="cross-icon"><MdOutlineClose className="round-cross-icon" size="20" type="submit" onClick={deleteuser} /></div>
      </div>
    </div>
  );
};
export default NameChip;
