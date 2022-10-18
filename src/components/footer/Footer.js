import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="right">
          <h4>Kan också hitta oss på Sociala Medier</h4>
          <p>
            Vi sponsrar de vi samarbetar med och de tjänster vi jobbar med, för
            att få ut deras erbjudanden till dig, på dessa sociala medier
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
