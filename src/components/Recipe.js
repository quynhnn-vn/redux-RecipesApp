import React from "react";

export const Recipe = ({ recipe, children }) => {
    return (
        <div className="recipe" key={recipe.id} tabIndex={0}>
            <span className="recipe-container">
                <h3 className="recipe-name">{recipe.name}</h3>
                <div className="image-container">
                    <img className="recipe-image" src={recipe.img} alt=""/>
                </div>
            </span>
            {children}
        </div>
    )
}