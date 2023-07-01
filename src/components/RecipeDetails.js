import React from "react";
import { useNavigate, useParams } from "react-router";
import { useData } from "../context/DataContext";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const {
    state: { recipes },
  } = useData();

  const recipeInfo = recipes.find((item) => item.id === String(recipeId));

  const navigate = useNavigate();

  if (recipeInfo) {
    const { name, image, cuisine, ingredients, instructions } = recipeInfo;
    return (
      <>
        <button className="btnBack" onClick={() => navigate("/")}>
          Back
        </button>
        <div className="recipeDetail-container">
          <h2>{name}</h2>
          <div className="recipeDetailsbox">
            <div className="recipeDetails-ImgContainer">
              <img src={image} alt={name} />
            </div>
            <div className="recipeDetails-textContainer">
              <p>
                <span>Cuisine:</span>
                <span>{cuisine}</span>
              </p>
              <p>
                <span>Ingredients:</span>
                <span>{ingredients?.join()}</span>
              </p>
              <p>
                <span>Instructions:</span>
                <span>{instructions?.join()}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default RecipeDetails;
