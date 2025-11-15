// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <div className="mb-6 p-6 bg-blue-200 rounded">
          <h1 className="text-2xl font-bold mb-4">Recipe App</h1>
          <AddRecipeForm />
          <SearchBar />
        </div>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
