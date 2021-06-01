import React from "react";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice";

const searchIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg";
const clearIconUrl =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg";

export const SearchTerm = ({ searchTerm, dispatch }) => {
  const onSearchTermChangeHandler = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };
  
  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        placeholder="Search recipes"
        onChange={onSearchTermChangeHandler}
      />
      {searchTerm.length > 0 && (
        <button
          id="search-clear-button"
          type="button"
          onClick={onClearSearchTermHandler}
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
