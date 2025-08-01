import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      deleteRecipe(id);
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
