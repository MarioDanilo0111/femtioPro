import React from "react";
import "./FoodItem.css";

const FoodItem = ({ food }) => {
  return (
    <div className="intern-container">
      <div className="first-line">
        <div className="local-page">
          <a
            href={food.show_page}
            target="_blank"
            rel="noopener noreferrer"
            className="local"
          >
            <div className="img-container">
              <img src={food.img} alt="" className="img" />
            </div>
          </a>
        </div>
        <div className="store-container">
          <img className="storName" alt="" src={food.storeName} />
          <div className="local-direction">
            <a
              href={food.map}
              target="_blank"
              rel="noopener noreferrer"
              className="local"
            >
              {food.localization}
            </a>
          </div>
        </div>
      </div>
      <div className="desc-container">
        <a
          href={food.show_page}
          target="_blank"
          rel="noopener noreferrer"
          className="local"
        >
          <div className="foodItem-title">{food.title}</div>
          <div className="desc">{food.description}</div>
        </a>
      </div>

      <div className="food-item__price">
        <div>
          <div className="expDate">Bäst Föte: {food.expDate}</div>
        </div>
        <div>
          <div className="ord-pris">ord.{food.ord}</div>
        </div>
        <div>
          <div className="price">pris: {food.price}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
