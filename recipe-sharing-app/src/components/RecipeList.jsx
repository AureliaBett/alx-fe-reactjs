// File: src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="flex flex-col gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="p-4 border rounded bg-slate-50">
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="text-lg font-bold">{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <div className="flex gap-2 mt-2">
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
