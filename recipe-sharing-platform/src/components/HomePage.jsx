import React, {useState, useEffect} from "react";
import data from "../data.json"

function HomePage() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() =>{
    setRecipe(data)

  }, []
);

  return (
    <div className="recipeCard bg-gray-1000 sm:p-4 md:p-8 sm: text-lg md:text-xl max-w-sm max-auto my-20 rounded-lg shadow-lg">
        <div>
            <h1> Recipe Sharing App</h1>
            <p>Cook to your hearts desires with our Recipes</p>
            
        </div>
        <div className ="bg-red-100 rounded-lg" >
          {recipes.map((recipe) =>(
          <div key ={recipe.id} >
            <img src={recipe.image} className = "sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"  ></img>
            <div  className="text-blue-800" >
              <h2 className="my-4">{recipe.title}</h2>
              <p className="text-base">{recipe.summary}</p>
            </div>
          </div>
            
          ))}
        </div>

    </div>
  );
}
export default HomePage