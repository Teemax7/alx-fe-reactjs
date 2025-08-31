import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ id }) => {
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const favoriteIds = useRecipeStore((state) => state.favoriteIds);
  const isFavorite = favoriteIds.includes(id);

  return (
    <button onClick={() => toggleFavorite(id)}>
      {isFavorite ? '★ Favorited' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;
// This component allows users to favorite or unfavorite a recipe.
// It uses the `toggleFavorite` function from the recipe store to update the favorite status