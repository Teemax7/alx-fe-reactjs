import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const favoriteIds = useRecipeStore((state) => state.favoriteIds);
  const getRecommendedRecipes = useRecipeStore((state) => state.getRecommendedRecipes);

  const recipeId = Number(id);
  const recipe = recipes.find((r) => r.id === recipeId);
  const isFavorite = favoriteIds.includes(recipeId);
  const recommendations = getRecommendedRecipes(recipeId);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <FavoriteButton id={recipeId} />

      <p>
        Status: <strong>{isFavorite ? '★ Favorited' : '☆ Not Favorited'}</strong>
      </p>

      <EditRecipeForm recipe={recipe} />

      <button onClick={handleDelete} style={{ color: 'red', marginTop: '10px' }}>
        Delete
      </button>

      {/* ✅ Show Recommendations */}
      <div style={{ marginTop: '20px' }}>
        <h3>Recommended Recipes</h3>
        {recommendations.length > 0 ? (
          recommendations.map((rec) => (
            <div key={rec.id}>
              <Link to={`/recipe/${rec.id}`}>
                <h4>{rec.title}</h4>
              </Link>
              <p>{rec.description}</p>
            </div>
          ))
        ) : (
          <p>No recommendations found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
// This component displays the details of a specific recipe.
// It allows users to edit or delete the recipe, favorite it, and view recommendations based ony