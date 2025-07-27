import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

function RecommendationList() {
  const recommended = useRecipeStore((state) => state.getRecommended());

  if (recommended.length === 0) return null;

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommended.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
