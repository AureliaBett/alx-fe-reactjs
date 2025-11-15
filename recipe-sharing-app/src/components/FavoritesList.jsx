
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(r => r.id === id)).filter(Boolean)
  );

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="mt-6 p-4 border rounded bg-pink-50">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} className="border p-2 rounded mb-2 bg-white">
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="font-bold">{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
