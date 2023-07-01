import React, { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { recipes } from "../constant";

const initialState = {
  recipes: JSON.parse(localStorage.getItem("allRecipes")) || recipes,
  showAddRecipeModal: false,
  searchInputFilterType: "name",
  searchText: "",
};

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  localStorage.setItem("allRecipes", JSON.stringify(state.recipes));

  const getFilteredData = (recipes, type, search) => {
    if (search.length === 0) return recipes;
    switch (type) {
      case "name": {
        return recipes.filter((element) =>
          element.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      case "cuisine": {
        return recipes.filter((element) =>
          element.cuisine.toLowerCase().includes(search.toLowerCase())
        );
      }

      case "ingredients": {
        return recipes.filter((element) =>
          element.ingredients.some((item) =>
            item.toLowerCase().includes(search.toLowerCase())
          )
        );
      }

      default:
        break;
    }
  };

  const filterData = getFilteredData(
    state.recipes,
    state.searchInputFilterType,
    state.searchText
  );

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        filterData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
