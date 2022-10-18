import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="hamburger" onClick={handleClick}>
        <FaBars style={{ color: "#fff" }} size={20} />
      </div>
      <Link to="/" className="logo">
        Femtio Procent
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <AiOutlineHome className="icon" />
            Femtio Procent
          </Link>
        </li>
        <li>
          <Link to="/Kategory">
            <BiCategory className="icon" />
            Kategory
          </Link>
        </li>
        <li>
          <Link to="/Butiker">
            <MdOutlineStoreMallDirectory className="icon" />
            Butiker
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
