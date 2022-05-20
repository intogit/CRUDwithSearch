import React, { useState } from "react";
import {FaUserTie} from 'react-icons/fa';
import {GoPrimitiveDot} from 'react-icons/go';

import "./SearchedUser.css";

const SearchedUsers = (props) => {
  const id = props.element.id;
  const fname = props.element.fname || " ";
  const lname = props.element.lname || " ";
  const position = props.element.position || " ";
  const email = props.element.email || " abc@gmail.com";
  const newUser = {
    id: id,
    fname: fname,
    lname: lname,
    position: position,
    email: email,
  };
  const addNameChip = (event) => {
    event.preventDefault();
    props.addNewNameChip(newUser);
  };

  return (
    <div>
      <div onClick={addNameChip}>
        <div className="row searchedUser  m-0 p-3 ">
          <div className="col-md-2 circle_in_search"><b>{fname[0] + lname[0]}</b></div>
          <div className="col name-and-position d-flex flex-column align-items-start">
            <h5 className="name_in_search"><b>{fname + " " + lname}</b></h5>
            <div className="d-flex flex-wrap">
              <p className="position_in_searchDropdown m-0"><FaUserTie className="user-icon" size="12px" color="grey" />{position}</p>
              <p className="email_in_searchDropDown m-0"><GoPrimitiveDot className="dot-icon" size="12px" color="grey"/>{email}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};
export default SearchedUsers;
