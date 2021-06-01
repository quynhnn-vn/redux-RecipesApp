import "./App.css";
import React from "react";
import { SearchTerm } from "../features/searchTerm/SearchTerm";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes";
import { AllRecipes } from "../features/allRecipes/AllRecipes";

const App = ({ state, dispatch }) => {
  const visibleAllRecipes = getFilteredRecipes(
    state.allRecipes,
    state.searchTerm
  );
  const visibleFavoriteRecipes = getFilteredRecipes(
    state.favoriteRecipes,
    state.searchTerm
  );

  return (
    <main>
      <div className="header-container">
        <img className="logo" src="img/logo.jpg" alt="" />
        <h1> Choose your recipes </h1>
      </div>
      <section>
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
      </section>
    </main>
  );
};
// Search recipes matching a term
const getFilteredRecipes = (recipes, searchTerm) => {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
export default App;
