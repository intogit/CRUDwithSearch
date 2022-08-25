import React, { useState, useRef } from "react";
import {FaUserTie} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'

import "./SearchedUser.css";

const SearchedUsers = (props) => {
  const id = props.element.id;
  const fname = props.element.fname || " ";
  const lname = props.element.lname || " ";
  const position = props.element.position || "NA";
  const email = props.element.email || " abc@gmail.com";
  const phone = props.element.phone || "NA";
  const status = props.element.status || " ";
  const newUser = {
    id: id,
    fname: fname,
    lname: lname,
    position: position,
    phone : phone,
    email: email,
    status : status,
  };
  const addNameChip = (event) => {
    event.preventDefault();
    props.addNewNameChip(newUser);
  };
  

  const [userStatus, setUserStatus] = useState(status);
  const checkStatus = useRef(userStatus);
  
  const changeStatus =() =>{
    if(userStatus == 0){
      checkStatus.current.style.border= "2px #F900BF solid";
      setUserStatus(1);
    }
    else{
      checkStatus.current.style.border= "none";
      setUserStatus(0);
    }
  };

  return (
    <div>
      <div onClick={addNameChip}>
        <div className="row searchedUser  m-0 p-2 ">

          {userStatus == 1 && (<div className="col-md-2 circle_in_search" style = {{border: "2px #F900BF solid"}} ref={checkStatus}><b>{fname[0] + lname[0]}</b></div>)}
          {userStatus == 0 && (<div className="col-md-2 circle_in_search" ref={checkStatus}><b>{fname[0] + lname[0]}</b></div>)}

          <div className="col-md-1 px-0">
            <button onClick={changeStatus}>Status</button>
          </div>

          <div className="col">
          <div className="row background_of_name_and_email">
            <div className="col name-and-position d-flex flex-column align-items-start">
              <h5 className="name_in_search"><b>{fname + " " + lname}</b></h5>
              <div className="d-flex flex-wrap">
                <p className="position_in_searchDropdown m-0"><FaUserTie className="user-icon" size="18px" color="grey" />{position}</p>
              </div>
            </div>
            <div className="col phone-and-email-details ">
                <p className="phone_in_searchDropdown m-0 "><BsFillPhoneFill className="phone-icon" size="18px" color="grey"/>{phone}</p>
                <p className="email_in_searchDropDown m-0 "><MdEmail className="email-icon" size="18px" color="grey"/>{email}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};
export default SearchedUsers;
