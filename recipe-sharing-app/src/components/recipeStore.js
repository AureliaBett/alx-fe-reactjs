
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  favorites: [],
  recommendations: [],

  // Recipe actions
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes)=>set({recipes}),

  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  updateRecipe: (id, updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      )
    })),

  // Search/Filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId]
    })),

  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations (mock implementation)
  generateRecommendations: () =>
    set(state => ({
      recommendations: state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      )
    }))
}));

export default useRecipeStore;
