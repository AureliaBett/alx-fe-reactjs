import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import DeleteRecipeButton from './components/DeleteRecipeButton'

import './App.css'

function App() {
 

  return (
    <div>
      <div style={{ backgroundColor: "lightblue", padding: "50px"}}> <AddRecipeForm /></div>
      
      
      <div style={{ backgroundColor: "blue", padding: "50px"}} ><RecipeList /></div>
      
    </div>
    


  )
}

export default App

