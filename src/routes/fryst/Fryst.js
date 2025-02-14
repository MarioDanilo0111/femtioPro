import React from "react";
import { Link } from "react-router-dom";

import FoodAssortment from "../../components/foodAssortment/FoodItem";

import { fryst } from "../../assets/eachFood";
import "../foodCss/Food.css";
import { VscDebugStepBack } from "react-icons/vsc";

const Fryst = () => {
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
              <h1>Fryst</h1>
            </div>
            <div className="food-item__top">
              {fryst &&
                fryst.map((food, index) => {
                  return <FoodAssortment key={index} food={food} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fryst;
