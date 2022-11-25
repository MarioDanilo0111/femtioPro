import React, { Component } from "react";
import "./StoreImage.css";

// import { TbMilk } from "react-icons/tb";
// import { GiSlicedBread } from "react-icons/gi";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export class StoreImage extends Component {
  render() {
    return (
      <div className="page-wrap">
        <div className="storCont">
          <div className="store-img1">
            <div className="heading">
              <div className="heading-title">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
              </div>
            </div>
            <div className="card-container">
              <Link to="/mejeri/Mejeri" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/dairy.png"
                    alt="dairy-product"
                    className="IconFruit"
                  />
                  <div className="card-text">
                    <h3>Mejeri</h3>
                  </div>
                </div>
              </Link>
              <Link to="/brod/Brod" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/bread.png"
                    alt="bread"
                    className="IconFruit"
                  />
                  {/* <GiSlicedBread className="Icon" /> */}
                  {/* <FontAwesomeIcon icon={faFacebook} className="Icon" /> */}
                  <div className="card-text">
                    <h3>Bröd</h3>
                  </div>
                </div>
              </Link>
              <Link to="/frukt/Frukt" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/fruits.png"
                    className="IconFruit"
                    alt=""
                  />
                  <div className="card-text">
                    <h3>Frukt</h3>
                  </div>
                </div>
              </Link>
              <Link to="/veget/Veget" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/vegetable.png"
                    alt="vegetable icons"
                    className="IconFruit"
                  />
                  <div className="card-text">
                    <h3 className="veg">Vegetabler</h3>
                  </div>
                </div>
              </Link>
              <Link to="/dryck/Dryck" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/dryck.png"
                    alt="dryck product"
                    className="IconFruit"
                  />
                  <div className="card-text">
                    <h3>Dryck</h3>
                  </div>
                </div>
              </Link>
              <Link to="/fryst/Fryst" className="link-tag">
                <div className="cards">
                  <img
                    src="../katIcon/frozen-goods.png"
                    alt="frozen goods"
                    className="IconFruit"
                  />
                  <div className="card-text">
                    <h3>Fryst</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="store-img">
            <div className="storLogos">
              <div className="img-cont">
                <img
                  src="./storLogo/citygross.png"
                  alt=""
                  className="logos-img"
                />
              </div>
              <div className="img-cont">
                <img src="./storLogo/coop.png" alt="" className="logos-img" />
              </div>
              <div className="img-cont">
                <img
                  src="./storLogo/HemKöp_logo.png"
                  alt=""
                  className="logos-img"
                />
              </div>
              <div className="img-cont">
                <img src="./storLogo/ica.png" alt="" className="logos-img" />
              </div>
              <div className="img-cont">
                <img src="./storLogo/lidl.png" alt="" className="logos-img" />
              </div>
              <div className="img-cont">
                <img src="./storLogo/oob.png" alt="" className="logos-img" />
              </div>
              <div className="img-cont">
                <img src="./storLogo/willys.png" alt="" className="logos-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreImage;
