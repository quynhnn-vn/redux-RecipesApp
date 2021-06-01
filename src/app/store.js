import { combineReducers, createStore } from "redux";

import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesRecuder } from "../features/favoriteRecipes/favoriteRecipesSlice";
import  { searchTermReducer } from "../features/searchTerm/searchTermSlice";

// Create Store in combining reducers
export const store = createStore(combineReducers({
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesRecuder,
  searchTerm: searchTermReducer
}));