import React from "react";
import SearchResult from "../searchResult/SearchResult";
import "./RenderSearch.css";

import {
  mejeri,
  brod,
  frukt,
  veget,
  dryck,
  fryst,
} from "../../assets/eachFood";
const RenderSearch = () => {
  let foodGroup = mejeri.concat(brod, frukt, veget, dryck, fryst);

  // foodGroup.forEach((f) => console.log(f));
  return (
    <div className="renderSearch">
      <SearchResult foodGroup={foodGroup} />
    </div>
  );
};

export default RenderSearch;
