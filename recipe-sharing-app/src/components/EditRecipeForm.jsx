// File: src/components/EditRecipeForm.jsx
import React, { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description || '')

  const handleSubmit = (e) => {
    e.preventDefault()  // ensure form doesn't refresh the page
    updateRecipe(recipe.id, { title: title.trim(), description })
    setEditing(false)
    if(onClose) onClose()
  }

  if(!editing) {
    return <button onClick={() => setEditing(true)} className="px-3 py-1 border rounded">Edit</button>
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 border rounded bg-white">
      <input value={title} onChange={e => setTitle(e.target.value)} className="block mb-2" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} className="block mb-2" />
      <div className="flex gap-2">
        <button type="submit" className="px-3 py-1 rounded bg-slate-200">Save</button>
        <button type="button" onClick={() => setEditing(false)} className="px-3 py-1 rounded border">Cancel</button>
      </div>
    </form>
  )
}

export default EditRecipeForm
