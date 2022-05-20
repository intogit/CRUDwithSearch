import Users from "../user_card/Users";
import './Userlist.css';

const Userlist = (props) => {
    const deleteOneUserHandle =(userID) =>{
      props.deleteA_user(userID);
    }
  return (
    <div className="user-list">
        {props.details.map(
          (element,i) => 
          <Users 
          key = {i}
          deleteOneUser = {deleteOneUserHandle}
          id = {element.id}
          fname={element.fname}
          lname={element.lname}
          position={element.position}
        ></Users>
        )}
    </div>
  );
};
export default Userlist;
