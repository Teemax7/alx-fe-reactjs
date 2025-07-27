// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>

      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/favorites">My Favorites</Link>
      </nav>

      <SearchBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
