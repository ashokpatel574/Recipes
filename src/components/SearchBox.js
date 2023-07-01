import React, { useState } from "react";
import { useData } from "../context/DataContext";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState();
  const [filterInput, setFilterMenu] = useState("");
  const { dispatch } = useData();

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const filterChangeHandler = (e) => {
    setFilterMenu(e.target.value);

    dispatch({
      type: "searchFilter",
      payload: {
        type: "filterInput",
        text: searchInput,
      },
    });
  };

  return (
    <div className="searchbox-container">
      <span className="searchbox">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search here"
          value={searchInput}
          onChange={searchInputHandler}
        />
      </span>
      <span className="filterbox">
        <span>
          <input
            id="name"
            type="radio"
            name="searchBy"
            value="name"
            checked={"name" === filterInput}
            onChange={filterChangeHandler}
          />
          <label htmlFor="name">Name</label>
        </span>
        <span>
          <input
            id="ingredients"
            type="radio"
            name="searchBy"
            className="ingredients"
            value="ingredients"
            checked={"ingredients" === filterInput}
            onChange={filterChangeHandler}
          />
          <label htmlFor="ingredients">Ingredients</label>
        </span>
        <span>
          <input
            id="cuisine"
            type="radio"
            name="searchBy"
            value="cuisine"
            checked={"cuisine" === filterInput}
            onChange={filterChangeHandler}
          />
          <label htmlFor="cuisine">Cuisine</label>
        </span>
      </span>
    </div>
  );
};

export default SearchBox;
