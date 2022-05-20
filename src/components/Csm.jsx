import React, {useState} from "react";
import Searchbar from "./search_bar/Searchbar";
import Head from "./header/Head";
import Userlist from "./user_list/Userlist";
import "./Csm.css"

var details = [
  {
    id: 1,
    fname: "Abhishek",
    lname: "Yadav",
    position: "Client manager",
    email: "abc@gmail.com",
  },
  {
    id: 2,
    fname: "Abc",
    lname: "",
    position: "Recruitment success",
    email: "defg@gmail.com",
  },
  {
    id: 3,
    fname: "Lmn",
    lname: "Pqr",
    position: "Senior manager",
    email: "hello@gmail.com",
  },
  {
    id: 4,
    fname: "pawan",
    lname: "kumar",
    position: "coder",
    email: "pawan@gmail.com",
  },
  {
    id: 5,
    fname: "kartikey",
    lname: "sahu",
    position: "coder",
    email: "kartikey@gmail.com",
  },
];

var data =[];
var allUsersToAdd =[];

function Csm() {
  const [enteredDetails, setEnteredDetails] = useState(data);

  const addNewUserDetailHandler = (new_user_data) => {

    for(let i = 0; i<new_user_data.length; i++){
      var alreadyAdded = false;
      for(let j = 0; j<allUsersToAdd.length; j++){
        if(new_user_data[i].id == allUsersToAdd[j].id){
            alreadyAdded = true;
        }
      }
      if(!alreadyAdded){allUsersToAdd.unshift(new_user_data[i])}
    }

    // new_user_data.map((element) => allUsersToAdd.unshift(element));
    
    setEnteredDetails([...enteredDetails, new_user_data]);
  };
  const deleteUserHandle = (userID) => {
    allUsersToAdd = allUsersToAdd.filter((e) => e.id !== userID);
    setEnteredDetails([...allUsersToAdd]);
  };


  return (
    <div className=" body">
      <Head />
      <div className="container content p-4 my-4">
        <h2 className="py-3"><b>Customer Success Mangers</b></h2>
        <Searchbar
          addAllUsers={addNewUserDetailHandler}
          details={details}
        ></Searchbar>
          <div className="userlist py-4">
          <Userlist
            deleteA_user={deleteUserHandle}
            details={allUsersToAdd}
          ></Userlist>
        </div>
      </div>
    </div>
  );
}
export default Csm;
