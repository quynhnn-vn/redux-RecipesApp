import { Recipe } from "../../components/Recipe";
import { FavoriteButton } from "../../components/FavoriteButton";
import { loadData } from "./allRecipesSlice";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import React, { useEffect } from "react";

const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = ({ allRecipes, dispatch }) => {
  const onFirstRender = () => {
    dispatch(loadData());
  };
  // Load Data after the first render
  useEffect(onFirstRender, [dispatch]);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => {
        return (
          <Recipe recipe={recipe} key={recipe.id}>
            <FavoriteButton
              icon={favoriteIconURL}
              onClickHandler={() => onAddRecipeHandler(recipe)}
            >
              Add to Favorites
            </FavoriteButton>
          </Recipe>
        );
      })}
    </div>
  );
};
