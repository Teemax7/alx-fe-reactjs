// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
      }}
    />
  );
};

export default SearchBar;
// This component allows users to search for recipes by title or description.
// It uses the `setSearchTerm` function from the recipe store to update the search term