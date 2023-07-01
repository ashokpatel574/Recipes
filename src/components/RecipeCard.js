import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

const RecipeCard = ({ recipeListItem }) => {
  const { id, name, image, cuisine } = recipeListItem;
  const navigate = useNavigate();

  return (
    <div
      className="recipeCard"
      key={id}
      onClick={() => navigate(`/recipe/${id}`)}
    >
      <div className="recipeCardImgbox">
        <img src={image} alt={name} />
        <span className="icon-container">
          <span>
            <EditIcon />
          </span>
          <span>
            <DeleteIcon />
          </span>
        </span>
      </div>
      <div className="recipeCardTextbox">
        <p>{name}</p>
        <div>
          <span>Cuisine</span>
          <span>{cuisine}</span>
        </div>
        <div>
          <span>Ingredients</span>
          <span>
            See Recipe <NavigateNextIcon />
          </span>
        </div>
        <div>
          <span>Instructions</span>
          <span>
            See Recipe <NavigateNextIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
