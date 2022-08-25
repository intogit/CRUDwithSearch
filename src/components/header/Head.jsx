import "./Header.css"
import logo from "../.././teambook_images/teambook_web_logo_transparent.png";

const Head = () => {
  return (
    <div>
      <div className="container px-0">
        <img width="auto" height="40px" className="align-item-center" src = {logo}></img>
      </div>
    </div>
  );
};

export default Head;
