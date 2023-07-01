import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const {
    dispatch,
    state: { searchInputFilterType },
  } = useData();

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
    dispatch({
      type: "searchFilter",
      payload: searchInput,
    });
  };

  const filterChangeHandler = (e) => {
    dispatch({
      type: "typeFilter",
      payload: e.target.value,
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
            checked={"name" === searchInputFilterType}
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
            checked={"ingredients" === searchInputFilterType}
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
            checked={"cuisine" === searchInputFilterType}
            onChange={filterChangeHandler}
          />
          <label htmlFor="cuisine">Cuisine</label>
        </span>
      </span>
    </div>
  );
};

export default SearchBox;
