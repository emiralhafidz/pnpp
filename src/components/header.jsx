import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Search from "../assets/images/search.png";
import Person from "../assets/images/person.png";
// import { modalsLogout } from "./modals";
import { ModalsLogout } from "./modals";

const Header = ({ toggleSidebar }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="header">
      <ModalsLogout show={show} handleClose={handleClose} />
      <div className="left">
        <div className="hamburger" onClick={toggleSidebar}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="icon">
          <img src={Logo} alt="Logo PPM" />
        </div>
      </div>
      <div className="center">
        <img src={Search} alt="" />
        <input type="text" placeholder="   Masukkan Pencarian" />
      </div>
      <div className="right">
        <img onClick={handleShow} src={Person} alt="" />
      </div>
    </div>
  );
};

export default Header;
