
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/')
    }
  }

  return (
    <button onClick={handleDelete} className="px-3 py-1 border rounded text-red-600">Delete</button>
  )
}

export default DeleteRecipeButton