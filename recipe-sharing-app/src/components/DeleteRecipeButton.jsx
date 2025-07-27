import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
