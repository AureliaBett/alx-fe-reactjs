// File: src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete recipe
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  // Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      )
    })),

  // Search/Filter actions
  setSearchTerm: (term) => set(state => ({ searchTerm: term })),

  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
}));

export default useRecipeStore;
