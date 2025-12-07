import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-green-800 p-6">
      <div className="max-w-5xl mx-auto text-center text-white mb-10">
        <h1 className="text-4xl font-bold mb-2">Recipe Sharing App</h1>
        <p className="text-lg">Cook to your heart’s desire with our delicious recipes!</p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition hover:scale-[1.02]"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm mb-3">{recipe.summary}</p>

              {/* Link */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-green-700 font-medium hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
