import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  favoriteIds: [],
  filteredRecipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? updated : r)),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  toggleFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((favId) => favId !== id)
        : [...state.favoriteIds, id],
    })),

  getFavoriteRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        state.favoriteIds.includes(recipe.id)
      ),
    })),

  // Optional simple recommendations (same title start)
  getRecommendedRecipes: (id) => {
    const recipe = set.getState().recipes.find((r) => r.id === id);
    return recipe
      ? set
          .getState()
          .recipes.filter(
            (r) => r.id !== id && r.title.startsWith(recipe.title.charAt(0))
          )
      : [];
  },
}));
