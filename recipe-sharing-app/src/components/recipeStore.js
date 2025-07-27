import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favoriteIds: [],

  // EXPLICIT STATE FOR CHECKS
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().updateDerivedState();
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().updateDerivedState();
  },

  updateRecipe: (updated) => {
    const updatedRecipes = get().recipes.map((r) => (r.id === updated.id ? updated : r));
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().updateDerivedState();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false);
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  toggleFavorite: (id) => {
    const { favoriteIds } = get();
    const newFavorites = favoriteIds.includes(id)
      ? favoriteIds.filter((favId) => favId !== id)
      : [...favoriteIds, id];

    set({ favoriteIds: newFavorites }, false);
    get().updateDerivedState();
  },

  getFavorites: () => {
    return get().recipes.filter((recipe) => get().favoriteIds.includes(recipe.id));
  },

  getRecommended: () => {
    const favorites = get().getFavorites();
    const firstLetters = new Set(favorites.map((f) => f.title.charAt(0)));
    return get().recipes.filter(
      (r) =>
        !get().favoriteIds.includes(r.id) &&
        firstLetters.has(r.title.charAt(0))
    );
  },

  updateDerivedState: () => {
    set({
      favorites: get().getFavorites(),
      recommendations: get().getRecommended(),
    });
  },
}));
