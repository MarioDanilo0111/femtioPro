import React, { useState } from "react";
import SearchList from "../../components/searchList/SearchList";
import "./SearchResult.css";

function SearchResult({ foodGroup }) {
  const [searchField, setsearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredFoods = foodGroup.filter((food) => {
    return (
      (food != null &&
        food.category != null &&
        food.category.toLowerCase().includes(searchField.toLowerCase())) ||
      // .includes(searchField.toLowerCase())
      // food.title != null &&

      (food != null &&
        food.name != null &&
        food.name.toLowerCase().includes(searchField.toLowerCase())) ||
      (food != null &&
        food.localization != null &&
        food.localization.toLowerCase().includes(searchField.toLowerCase())) ||
      (food != null &&
        food.title != null &&
        food.title.toLowerCase().includes(searchField.toLowerCase())) ||
      (food != null &&
        food.description != null &&
        food.description.toLowerCase().includes(searchField.toLowerCase()))
      // .includes(searchField.toLowerCase())
    );
  });
  // console.log("--->>", fil);

  const handleChange = (e) => {
    setsearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchFood() {
    if (searchShow) {
      return (
        <>
          <SearchList filteredFoods={filteredFoods} />
        </>
      );
    }
  }

  return (
    <div className="Search-container">
      <div className="firtSearchpart">
        <div className="search-title">
          <h1>Sök bland alla produkter</h1>
        </div>
        <div className="text-cont">
          <p>
            Här kan du söka lite mer specifikt t.ex. om du vill se efter en viss
            matvara, om den finns i din närhet, du kan söka efter namn på den
            orten du befinner dig på eller om du skulle vilja söka efter en
            specifik mat sort.
          </p>
          <div className="text-cont-inner">
            <p>Så tänk på</p>
          </div>
          <p>butik namn,</p>
          <p>din befintliga plats,</p>
          <p>mat sort.</p>
          <p>när du söker...</p>
        </div>
      </div>
      <div className="searchSection">
        <div className="searchTitle-two">
          <h2>Skriv här:</h2>
        </div>
        <div className="searchComp">
          <input
            className="search-bar"
            type="search"
            placeholder="Sök ord"
            onChange={handleChange}
          />
        </div>
      </div>
      {searchFood()}
    </div>
  );
}

export default SearchResult;
