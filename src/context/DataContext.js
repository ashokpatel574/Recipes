import React, { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { recipes } from "../constant";

const initialState = {
  recipes: recipes,
  showAddRecipeModal: false,
  searchInputFilterType: "name",
  searchText: "",
};

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  // localStorage.setItem("allRecipes", recipes);
  // const getDatafromStore = JSON.parse(localStorage.getItem("allRecipes"));

  // const filterByname = (data, searchText) => {
  //   if (searchText === "") {
  //     return data;
  //   }
  //   return data?.filter((item) =>
  //     item?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  //   );
  // };

  // const filterRecipe = (data, filterType, searchText) => {
  //   let filterData = [...data];

  //   if (filterType === "name") {
  //     return filterByname(filterData, searchText);
  //   }

  //   return filterData;
  // };

  // const { filterData } = filterRecipe(
  //   state.recipes,
  //   state.searchInputFilterType,
  //   state.searchText
  // );

  // console.log(filterData);

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
