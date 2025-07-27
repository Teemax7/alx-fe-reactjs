import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton'; // Import the FavoriteButton component

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>

            {/* ✅ Add the favorite button here */}
            <FavoriteButton id={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;

// This component displays a list of recipes.
// It uses the `filteredRecipes` from the recipe store to show recipes based on the search
// term or favorites.
// Each recipe has a link to its details page and a button to favorite or unfavorite it