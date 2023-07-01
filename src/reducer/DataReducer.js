import { v4 as uuid } from "uuid";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "OpenAddRecipeModal": {
      return {
        ...state,
        showAddRecipeModal: true,
      };
    }

    case "CloseAddRecipeModal": {
      return {
        ...state,
        showAddRecipeModal: false,
      };
    }

    case "searchFilter": {
      return {
        ...state,
        searchText: action.payload,
      };
    }

    case "typeFilter": {
      return {
        ...state,
        searchInputFilterType: action.payload,
      };
    }

    case "AddNewRecipe": {
      const newrecipe = { ...action.payload, id: uuid() };
      return {
        ...state,
        showAddRecipeModal: false,
        recipes: [...state.recipes, newrecipe],
      };
    }

    default:
      return state;
  }
};
