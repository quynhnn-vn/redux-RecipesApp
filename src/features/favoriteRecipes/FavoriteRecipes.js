import React from "react";
import { Recipe } from "../../components/Recipe";
import { FavoriteButton } from "../../components/FavoriteButton";
import { removeRecipe } from "./favoriteRecipesSlice";

const unfavoriteIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

export const FavoriteRecipes = ({ favoriteRecipes, dispatch }) => {
  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => {
        return (
          <Recipe recipe={recipe} key={recipe.id}>
            <FavoriteButton
              icon={unfavoriteIconUrl}
              onClickHandler={() => onRemoveRecipeHandler(recipe)}
            >
              Remove Favorite
            </FavoriteButton>
          </Recipe>
        );
      })}
    </div>
  );
};
