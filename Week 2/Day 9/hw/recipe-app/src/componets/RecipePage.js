import React from 'react';

import { useState, useEffect } from 'react';


import RecipeInput from './RecipeInput';
import RecipeTable from './RecipeTable';
import RecipeService from '../services/RecipeServices'


export default function () {
  const [recipes, setRecipes] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    setLoading(true);
    try {
      const new_recipes = await RecipeService.fetchRecipes();
      setRecipes(new_recipes);
    } catch (err) {
      console.log("Error loading tasks: " + err);
      // alert("Error loading tasks: " + err);
    }
    setLoading(false);
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
  )
}
