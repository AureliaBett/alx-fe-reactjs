
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div className="mt-6 p-4 border rounded bg-green-50">
      <h2 className="text-xl font-bold mb-2">Recommended Recipes</h2>
      {recommendations.map(recipe => (
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

export default RecommendationsList;
