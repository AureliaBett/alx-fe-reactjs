import React, {useState, useEffect} from "react";
import data from "../data.json"

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() =>{
    setRecipe(data)

  }
)

  return (
    <div>
        <div>
            <h1> Recipe Sharing App</h1>
            <p>Cook to your hearts desires with our Recipes</p>
        </div>

    </div>
  );
}