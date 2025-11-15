// File: src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import './App.css'

function App() {
  const [description, setDescription] = useState('');

  return (
    <Router>
      <div>
        <div style={{ backgroundColor: "lightblue", padding: "50px" }}>
          <AddRecipeForm />
        </div>
        <div style={{ backgroundColor: "blue", padding: "50px" }}>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
