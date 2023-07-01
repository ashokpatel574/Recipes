import React, { useState } from "react";
import { useData } from "../context/DataContext";

const AddRecipeModal = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    ingredients: [],
    instructions: [],
    cuisine: "",
  });

  const {
    dispatch,
    state: { recipes },
  } = useData();
  const closeModal = () => {
    dispatch({ type: "CloseAddRecipeModal" });
  };

  const newRecipeInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "ingredients" || name === "instructions") {
      setNewRecipe(() => ({
        ...newRecipe,
        [name]: [value],
      }));
    } else {
      setNewRecipe(() => ({
        ...newRecipe,
        [name]: value,
      }));
    }
  };

  const newRecipeImageHandler = (e) => {
    const { name, files } = e.target;
    const filesUrl =
      files && [...files]?.map((file) => URL.createObjectURL(file));

    setNewRecipe(() => ({
      ...newRecipe,
      [name]: filesUrl,
    }));
  };

  const addRecipeHandler = () => {
    localStorage.setItem("allRecipes", [...recipes, newRecipe]);
    dispatch({ type: "AddNewRecipe", payload: newRecipe });
  };

  return (
    <div className="recipeModal-container">
      <div>
        <span>Add Recipe</span>
        <span className="closeBtn" onClick={closeModal}>
          X
        </span>
      </div>
      <div>
        <label htmlFor="addName">Name</label>
        <input
          type="text"
          id="addName"
          className="addName"
          name="name"
          required
          onChange={newRecipeInputHandler}
        />
      </div>

      <div>
        <label htmlFor="addCuisine">Cuisine</label>
        <input
          type="text"
          id="addCuisine"
          name="cuisine"
          className="addCuisine"
          required
          onChange={newRecipeInputHandler}
        />
      </div>

      <div>
        <label htmlFor="addIngredients">Ingredients</label>
        <textarea
          type="text"
          id="addIngredients"
          className="addIngredients"
          name="ingredients"
          required
          onChange={newRecipeInputHandler}
        ></textarea>
      </div>

      <div>
        <label htmlFor="addInstructions">Instructions</label>
        <textarea
          type="text"
          id="addInstructions"
          className="addInstructions"
          name="instructions"
          required
          onChange={newRecipeInputHandler}
        ></textarea>
      </div>

      <div>
        <label htmlFor="addImage">Image</label>
        <input
          type="file"
          id="addimage"
          accept="image/*"
          className="addImage"
          name="image"
          required
          onChange={newRecipeImageHandler}
        />
      </div>

      <button onClick={addRecipeHandler} className="addRecipeBtn">
        Add Recipe
      </button>
    </div>
  );
};

export default AddRecipeModal;
