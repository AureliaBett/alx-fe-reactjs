import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    // OPTIONAL: at least 2 ingredients
    const ingredientsArr = ingredients.split(",");
    if (ingredientsArr.length < 2) {
      setError("Please list at least two ingredients separated by commas.");
      return;
    }

    // if valid
    setError("");
    console.log({
      title,
      ingredients: ingredientsArr,
      steps,
    });

    // clear input
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
          Add New Recipe
        </h1>

        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}

        {/* Title */}
        <label className="block mb-4">
          <span className="text-gray-700">Recipe Title</span>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        {/* Ingredients */}
        <label className="block mb-4">
          <span className="text-gray-700">Ingredients (comma separated)</span>
          <textarea
            className="w-full mt-2 p-2 border rounded h-28 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Example: eggs, milk, sugar"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </label>

        {/* Steps */}
        <label className="block mb-6">
          <span className="text-gray-700">Preparation Steps</span>
          <textarea
            className="w-full mt-2 p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe how to prepare your recipe..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded font-medium transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
