import "./Searchbar.css";
import SearchedUsers from "./SearchedUser";
import NameChip from "../namechip/NameChip";
import { useState } from "react";

var searchedUsers = [];
var new_user = [];

const Searchbar = (props) => {
  const [showNameChipBar, setShowNameChipBar] = useState(false);
  const [showSearchList, setShowSearchList] = useState(false);
  const [newSearchedUsers, setNewSearchedUsers] = useState(searchedUsers);

  const searching = (event) => {
    setShowSearchList(true);
    let x = String(event.target.value);

    if (x != "") {
      props.details.find(function (item) {
        if (
          item.fname.includes(x) ||
          item.lname.includes(x) ||
          item.email.substring(0, item.email.lastIndexOf("@")).includes(x)
        ) {
          searchedUsers.push(item);
        }
      });
    }

    if (searchedUsers.length == 0) {
      setShowSearchList(false);
    }
    setNewSearchedUsers([...searchedUsers]);
    searchedUsers = [];
  };

  const [newNameChip, setNewNameChip] = useState(new_user);
  const addNewNameChipHandle = (new_user_data) => {
    setShowNameChipBar(true);
    var alreadyPresent = false;

    for (var i = 0; i < newNameChip.length; i++) {
      if (newNameChip[i].id == new_user_data.id) {
        alreadyPresent = true;
      }
    }

    if (alreadyPresent == false) {
      setNewNameChip([...newNameChip, new_user_data]);
    } 
    // else {
    //   alert(
    //     "item already added need to highlight that name chp instead of alert"
    //   );
    // }
  };

  const addCSM = (event) => {
    setShowNameChipBar(false);
    event.preventDefault();
    props.addAllUsers(newNameChip);
    setNewNameChip([]);
    setNewNameChip([]);
    setNewNameChip([]);
  };
  const deleteOneUserHandle = (key) => {
    const newNameChips = newNameChip.filter((e) => e.id !== key);
    if (newNameChips.length == 0) {
      setShowNameChipBar(false);
    }
    setNewNameChip([...newNameChips]);
  };

  return (
    <div>
      <form className="">
        <div className="row">
          <div className="input-group d-flex">
            <div className="flex-grow-1 setMargin0">
              <input
                type="text"
                placeholder="Add members by Name or Email"
                onChange={searching}
                className="form-control"
              />
              {showNameChipBar && (
                <div>
                  <div className=" name_chip_wrap d-flex flex-wrap flex-start">
                    {newNameChip.map((element, i) => (
                      <NameChip
                        key={i}
                        deleteOneUser={deleteOneUserHandle}
                        details={element}
                      ></NameChip>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              className="col-md-2 btn btn-primary"
              type="button "
              onClick={addCSM}
            >
              Create Team
            </button>
          </div>
        </div>
      </form>
      {showSearchList && (
        <div className="col-md-10 searched-user">
          {newSearchedUsers.map((element, i) => (
            <SearchedUsers
              key={i}
              addNewNameChip={addNewNameChipHandle}
              element={element}
            ></SearchedUsers>
          ))}
        </div>
      )}
    </div>
  );
};
export default Searchbar;
