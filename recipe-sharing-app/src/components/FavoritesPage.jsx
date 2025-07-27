import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesPage = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favoriteIds);
  const favorites = recipes.filter((recipe) => favoriteIds.includes(recipe.id));

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
