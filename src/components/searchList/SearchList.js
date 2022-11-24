import React from "react";
// import FoodItem from "../foodAssortment/FoodItem";
// import FoodItem from "../assets/eachFood";
import FoodAssortment from "../foodAssortment/FoodItem";
import "./SearchList.css";

function SearchList({ filteredFoods }) {
  const filtered =
    filteredFoods &&
    filteredFoods.map((food, i) => <FoodAssortment key={i} food={food} />);
  return (
    <div className="filtered">
      <>{filtered}</>
    </div>
  );
}
export default SearchList;
