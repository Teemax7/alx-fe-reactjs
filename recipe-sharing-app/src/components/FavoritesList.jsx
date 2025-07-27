import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import RecommendationList from './RecommendationsList';

function FavoritesList() {
  const favoriteRecipes = useRecipeStore((state) => state.getFavorites());

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't favorited any recipes yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <RecommendationsList />
    </div>
  );
}

export default FavoritesList;
