import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-one">
          <h4>här kan du också hitta oss</h4>
          <p>
            Vi sponsrar dem vi samarbetar med och de tjänster de erbjuder
            stödjer vi också. Deras erbjudanden kan du också hitta på sociala
            medier
          </p>
        </div>

        <div className="footer-two">
          <div className="social">
            <div className="fb">
              <FaFacebook
                size={30}
                style={{
                  color: "#fff",
                }}
              />
            </div>
            <div className="ig">
              <FaInstagram
                size={30}
                style={{
                  color: "#fff",
                }}
              />
            </div>
          </div>
          <div className="footer-date">
            <h3>® {new Date().getFullYear()} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
