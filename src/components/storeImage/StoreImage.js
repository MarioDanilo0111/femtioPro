import React, { Component } from "react";
import "./StoreImage.css";

import { Link } from "react-router-dom";

import { TbMilk } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { FaFontAwesome } from "react-icons/fa";
// import "../prodCard/ProdCard.css";

export class StoreImage extends Component {
  render() {
    return (
      <div className="store-img">
        <div className="heading">
          <div className="heading-title">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
          <div className="card-container">
            <div className="cards">
              <Link to="">
                <TbMilk className="Icon" />
              </Link>
              <h3>Mejeri</h3>
            </div>
            <div className="cards">
              <Link to="">
                <GiSlicedBread className="Icon" />
              </Link>
              <h3>Bröd</h3>
            </div>
            <div className="cards">
              <Link to="">
                <FaFontAwesome icon="fa-thin fa-crate-apple" className="Icon" />
              </Link>
              <h3>frukt</h3>
            </div>
            <div className="cards">
              <Link to="">
                <TbMilk className="Icon" />
              </Link>
              <h3>Mejeri</h3>
            </div>
            <div className="cards">
              <Link to="">
                <TbMilk className="Icon" />
              </Link>
              <h3>Mejeri</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreImage;
