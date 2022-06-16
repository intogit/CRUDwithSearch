import "./Header.css"

const Head = () => {
  return (
    <div>
      <div className="container px-0">
        <div id="logo_box">
          <div id="logo"></div>
        </div>
        <div id="rightSize_box">
          <p className="m-0 p-0" id="first_para">
            TEAM-BOOK
          </p>
          <p className="m-0 p-0" id="second_para">
            Manages your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
