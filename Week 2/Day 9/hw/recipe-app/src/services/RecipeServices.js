import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/Firebase';
  import { Recipe } from '../models/Recipe';

  class RecipeService {
    constructor() {
        this.collection = 'recipes';
    }

    async fetchRecipes() {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);

        const recipes = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const recipe = new Recipe(data.name, data.ingredients, data.instructions, doc.id);
            recipes.push(recipe);
        });

        console.log('fetch');
        console.log(recipes);

        return recipes;
    }

    async createRecipe(recipe) {
        console.log("recipe:");
        console.log(recipe);
        if (recipe.name === '' || recipe.ingredients === '' || recipe.instructions === '') {
            return;
        }
        console.log('collection');
        const collectionRef = collection(db, this.collection);
        console.log(collectionRef);
        
        const docRef = await addDoc(collectionRef, {
          name: recipe.name,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions
        });
    
        recipe.id = docRef.id;
        console.log('create in services')
        console.log(recipe);
        return recipe;
    }

    async deleteRecipe(recipeId) {
        const docRef = doc(db, this.collection, recipeId);
        await deleteDoc(docRef);
      }




}

const service = new RecipeService();
export default service;