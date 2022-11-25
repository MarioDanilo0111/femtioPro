import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "#fff" }} size={20} />
        ) : (
          <FaBars style={{ color: "#fff" }} size={20} />
        )}
      </div>
      <div className="top-log">
        <Link to="/" className="nav-logo">
          <h1>Femtio Procent</h1>
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>
            <AiOutlineHome className="icons" />
            Femtio Procent
          </Link>
        </li>
        <li>
          <Link to="/Kategory" onClick={handleClick}>
            <BiCategory className="icons" />
            Kategory
          </Link>
        </li>
        <li>
          <Link to="/rendersearch" onClick={handleClick}>
            <MdOutlineStoreMallDirectory className="icons" />
            Sök
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
