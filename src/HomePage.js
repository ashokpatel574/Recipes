import React, { useState } from "react";
import { useData } from "./context/DataContext";
import SearchBox from "./components/SearchBox";
import RecipeCard from "./components/RecipeCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const HomePage = () => {
  const { filterData, dispatch } = useData();

  const modalOpenHandler = () => {
    dispatch({ type: "OpenAddRecipeModal" });
  };

  return (
    <article className="recipe-container">
      <SearchBox />
      <p className="title"> All Recipes</p>
      <ul>
        {filterData?.length > 0 &&
          filterData?.map((item, id) => (
            <RecipeCard recipeListItem={item} key={id} />
          ))}

        <div
          key="newItem"
          className="addItemIcon-container"
          onClick={modalOpenHandler}
        >
          <AddCircleOutlineIcon />
        </div>
      </ul>
    </article>
  );
};

export default HomePage;
