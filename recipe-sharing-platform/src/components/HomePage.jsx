import React, {useState, useEffect} from "react";
import data from "../data.json"

function HomePage() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() =>{
    setRecipe(data)

  }, []
);

  return (
    <div>
        <div>
            <h1> Recipe Sharing App</h1>
            <p>Cook to your hearts desires with our Recipes</p>
            
        </div>
        <div>
          {recipes.map((recipe) =>(
          <div key ={recipe.id} >
            <img src={recipe.img}  ></img>
            <div>
              <h2>{recipe.title}</h2>
              <p>{recipe.summary}</p>
            </div>
          </div>
            
          ))}
        </div>

    </div>
  );
}
export default HomePage