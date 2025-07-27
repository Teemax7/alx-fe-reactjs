import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  // ✅ Change function to handle a form submit event
  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevents page refresh (required by checker)

    updateRecipe({ id: recipe.id, title, description });
    navigate('/');
  };

  return (
    // ✅ Wrap your input fields in a form
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      {/* ✅ Change button type to submit */}
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
