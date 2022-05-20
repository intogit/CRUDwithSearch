import "./Users.css";
import {MdDelete} from 'react-icons/md'

const Users = (props) => {
  const id = props.id;
  const fname = props.fname || " ";
  const lname = props.lname || " ";
  const position = props.position;

  const deleteuser = (event) => {
    event.preventDefault();
    props.deleteOneUser(id);
  };
  return (
    <div>
      <form>
        <div className="row list_user m-0 p-3 d-flex">
          <div className="col-md-2 circle"><b>{fname[0] + lname[0]}</b></div>
          <div className="col d-inline-block d-flex flex-column  flex-wrap flex-grow-1 align-items-start">
            <div><h4><b className="name_in_userCard m-0">{fname + " " + lname}</b></h4></div>
            <div><p className="position_in_userCard m-0">{position}</p></div>
          </div>
          <div className="col-2 mx-2 delete_icon_div "><MdDelete className="delete_icon" onClick={deleteuser}/></div>
        </div>
      </form>
      <hr className="divider"/>
    </div>
  );
};
export default Users;
