import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (deletedRecipe) => set(state => ({ recipes: [...state.recipes, deleteRecipe] })),
  updateRecipe: (deletedRecipe) => set(state => ({ recipes: [...state.recipes, deleteRecipe] })),

}));

export default useRecipeStore