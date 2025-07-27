import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const recipe = recipes.find((r) => r.id === Number(id));

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <EditRecipeForm recipe={recipe} />
      <button onClick={handleDelete} style={{ color: 'red', marginTop: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default RecipeDetails;
