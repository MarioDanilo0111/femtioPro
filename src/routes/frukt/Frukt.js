import React from "react";
import { Link } from "react-router-dom";

import FoodAssortment from "../../components/foodAssortment/FoodItem";

import { frukt } from "../../assets/eachFood";
import "../foodCss/Food.css";
import { VscDebugStepBack } from "react-icons/vsc";

const Frukt = () => {
  return (
    <>
      <div>
        <div className="container__item">
          <div className="food-item__root">
            <div className="link">
              <Link rel="stylesheet" to="/kategory">
                {<VscDebugStepBack className="icon-return" />}
              </Link>
            </div>
            <div className="pagetitle">
              <h1>Frukt</h1>
            </div>
            <div className="food-item__top">
              {frukt &&
                frukt.map((food, index) => {
                  return <FoodAssortment key={index} food={food} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frukt;
