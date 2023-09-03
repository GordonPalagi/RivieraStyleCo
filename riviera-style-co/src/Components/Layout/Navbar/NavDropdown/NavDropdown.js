import { Link } from "react-router-dom";
import "./NavDropdown.css";


const Links = ({links}) => {
  return (
    <ul className="li-con">
      {links.map((item, index) => (
        <Link className="Link" to={"/shopItem"} key={index}>
          {item}
        </Link>
      ))}
    </ul>
  );
};

const Pictures = ({picture}) => {
  return (
    <div className="banner-picture-con">
      {picture.map((item, index) => (
        <img key={index} className="inbed-banner-img" src={item} alt="" />
      ))}
    </div>
  );
};

function NavDropdown({ links, picture }) {
  return (
    <div className="hovered-box-con">
      <Links links={links}/>
      <Pictures picture={picture}/>
    </div>
  );
}

export default NavDropdown;
