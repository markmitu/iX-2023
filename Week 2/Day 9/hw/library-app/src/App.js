import './App.css';

import { useState, useEffect } from 'react';

import RecipeInput from './componets/RecipeInput';
import RecipeTable from './componets/RecipeTable';
import RecipeService from './services/RecipeServices';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const new_recipes = await RecipeService.fetchRecipes();
      setRecipes(new_recipes);
    } catch (err) {
      console.log("Error loading tasks: " + err);
      // alert("Error loading tasks: " + err);
    }
  }

  async function onCreateRecipe(recipe) {
    const newRecipe = await RecipeService.createRecipe(recipe);
    console.log('create');
    console.log(newRecipe);
    setRecipes([...recipes, newRecipe]);
    console.log(recipes);
  }

  async function onDeleteRecipe(recipeId) {
    await RecipeService.deleteRecipe(recipeId);
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  }

  return (
    <div>
      <RecipeInput 
      createRecipe={onCreateRecipe}
      recipeToEdit={recipeToEdit}
      />
      <RecipeTable
      recipes={recipes}
      onDeleteRecipe={onDeleteRecipe}
      />
    </div>
  );
}

export default App;
