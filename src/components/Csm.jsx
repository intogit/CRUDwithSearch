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
    phone: "123456789",
    email: "abc@gmail.com",
    status: 1,
  },
  {
    id: 2,
    fname: "Abc",
    lname: "",
    position: "Recruitment success",
    phone: "123456789",
    email: "defg@gmail.com",
    status: 1,
  },
  {
    id: 3,
    fname: "Lmn",
    lname: "Pqr",
    position: "Senior manager",
    phone: "123456789",
    email: "hello@gmail.com",
    status: 0,
  },
  {
    id: 4,
    fname: "pawan",
    lname: "kumar",
    position: "coder",
    phone: "123456789",
    email: "pawan@gmail.com",
    status: 0,
  },
  {
    id: 5,
    fname: "kartikey",
    lname: "sahu",
    position: "coder",
    phone: "123456789",
    email: "kartikey@gmail.com",
    status: 1,
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

  const handleNewTeamName = () => {
    console.log("executed 1");
  }
  const handleNewTeamGoal = () => {
      console.log("executed 2");
  }


  return (
    <div className=" body">
      <Head />
      <div className="container content p-4 my-4">
        <h2>
          <span className="pinktext py-3">Let's work together</span><br></br>
          <span>&</span><br></br>
          <span className="voilettext py-3" >Build something amazing !</span>
        </h2>
        <br></br>
        
        <form action="/action_page.php"> 
          <div>
            <input type="text" placeholder = "Enter Team Name" onChange={handleNewTeamName} className="form-control" ></input>
            <input type="text" placeholder = "Enter Team Goal" onChange={handleNewTeamGoal} className="form-control" ></input>
          </div> 
        </form>
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
