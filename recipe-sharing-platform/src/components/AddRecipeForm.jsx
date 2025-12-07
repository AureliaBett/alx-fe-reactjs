import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const arr = ingredients.split(",");
      if (arr.length < 2) {
        newErrors.ingredients = "Please list at least two ingredients";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Steps are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log({
      title,
      ingredients: ingredients.split(","),
      steps,
    });

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
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

        {/* Title */}
        <label className="block mb-4">
          <span className="text-gray-700">Recipe Title</span>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title}</p>
          )}
        </label>

        {/* Ingredients */}
        <label className="block mb-4">
          <span className="text-gray-700">Ingredients (comma separated)</span>
          <textarea
            className="w-full mt-2 p-2 border rounded h-28"
            placeholder="eg: tomatoes, onions"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </label>

        {/* Steps */}
        <label className="block mb-6">
          <span className="text-gray-700">Preparation Steps</span>
          <textarea
            className="w-full mt-2 p-2 border rounded h-32"
            placeholder="Describe steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
          )}
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
