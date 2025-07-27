import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favoriteIds: [],
  filteredRecipes: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
  },

  updateRecipe: (updated) => {
    const updatedRecipes = get().recipes.map((r) => (r.id === updated.id ? updated : r));
    set({ recipes: updatedRecipes });
    get().filterRecipes();
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

  toggleFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter((favId) => favId !== id)
        : [...state.favoriteIds, id],
    })),

  getRecommendedRecipes: (id) => {
    const recipe = get().recipes.find((r) => r.id === id);
    return recipe
      ? get().recipes.filter(
          (r) => r.id !== id && r.title.charAt(0) === recipe.title.charAt(0)
        )
      : [];
  },
}));
