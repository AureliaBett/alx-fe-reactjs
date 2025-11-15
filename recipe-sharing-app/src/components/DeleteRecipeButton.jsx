import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <div>
        <h1>To delete</h1>
    <button
      onClick={() => {
        deleteRecipe(recipeId);
        alert("Recipe deleted!");
      }}
      style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}
    >
      Delete Recipe
    </button>

    </div>
  );
};

export default DeleteRecipeButton;
