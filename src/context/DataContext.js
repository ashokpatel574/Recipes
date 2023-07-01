import React, { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { recipes } from "../constant";

const initialState = {
  recipes: JSON.parse(localStorage.getItem("recipes")) || recipes,
  showAddRecipeModal: false,
  searchInputFilterType: "name",
  searchText: "",
};

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  localStorage.setItem("allRecipes", JSON.stringify(state.recipes));

  // const getFilteredData = (recipes, search, category) => {
  //   if (search.length === 0) return recipes;
  //   switch (category) {
  //     case "name": {
  //       return recipes.filter((recipe) =>
  //         recipe.name.toLowerCase().includes(search.toLowerCase())
  //       );
  //     }

  //     case "cuisine": {
  //       return recipes.filter((recipe) =>
  //         recipe.cuisine.toLowerCase().includes(search.toLowerCase())
  //       );
  //     }

  //     case "ingredients": {
  //       return recipes.filter((recipe) =>
  //         recipe.ingredients.some((item) =>
  //           item.toLowerCase().includes(search.toLowerCase())
  //         )
  //       );
  //     }

  //     default:
  //       break;
  //   }
  // };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
