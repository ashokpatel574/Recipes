import React, { useState } from "react";
import { useData } from "./context/DataContext";
import SearchBox from "./components/SearchBox";
import RecipeCard from "./components/RecipeCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const HomePage = () => {
  const {
    filterData,
    dispatch,
    state: { recipes },
  } = useData();

  const modalOpenHandler = () => {
    dispatch({ type: "OpenAddRecipeModal" });
  };

  return (
    <article className="recipe-container">
      <SearchBox />
      <p className="title"> All Recipes</p>
      <ul>
        {recipes?.length > 0 &&
          recipes?.map((item) => (
            <RecipeCard recipeListItem={item} key={item.id} />
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
