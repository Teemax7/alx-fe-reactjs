import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const recommendations = useRecipeStore((state) =>
    state.getRecommendedRecipes(id)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p>{recipe.description}</p>
      <FavoriteButton recipeId={recipe.id} />

      <h3>Recommended Recipes</h3>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>{rec.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
