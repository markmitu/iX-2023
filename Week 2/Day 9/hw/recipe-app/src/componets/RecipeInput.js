import React, { useState, useEffect } from 'react';

import { Recipe } from "../models/Recipe";
import Spinner from './Day 11 componets/Spinner';



export default function RecipeInput(props) {
    const [name, setName] = useState('');
    const [ingStr, setIngStr] = useState('');
    const [instructions, setInstructions] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.recipeToEdit) {
            setName(props.recipeToEdit.name);
            setIngStr(props.recipeToEdit.ingredients);
            setInstructions(props.recipeToEdit.instructions);
        }
    }, [props.recipeToEdit]);

    function onFormSubmit(e) {
        e.preventDefault();

        if(name === '' || ingStr === '' || instructions === '') return;
        
        let recipe = new Recipe(name, ingStr.split(","), instructions);
        console.log(name + " " + ingStr + " " + instructions);

        setLoading(true);
        props.createRecipe(recipe);
        setLoading(false);
        
        setName('');
        setIngStr('');
        setInstructions('');
    }

  return (
    <div className='card mt-5 mb-2 mx-5 p-4'>
        <h1 className='text-center'>Recipe Book</h1>
        <h5 className='text-center'>Store All Your Recipes Here!</h5>
        <hr/>
        <form id='form' onSubmit={onFormSubmit}>
        <label className="form-label">Recipe Name</label>
        <input type='text' 
        className='form-control mb-2' 
        placeholder='Enter Recipe Name'
        value={name}
        onChange={(e) => setName(e.target.value)}>
        </input>

        <label className="form-label">Recipe Ingredients</label>
        <textarea type='text' 
        className='form-control mb-2' 
        placeholder='Seperate Each Ingredient with a Comma. Ex: a, b, c'
        value={ingStr}
        onChange={(e) => setIngStr(e.target.value)}>
        </textarea>

        <label className="form-label">Recipe Instructions</label>
        <textarea type='text' 
        className='form-control mb-2' 
        placeholder='Enter Instructions Here'
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}>
        </textarea>

        <div class="d-grid gap-2">
            <button className='btn  btn-lg btn-outline-primary mt-4' type='submit'>
            { loading ? <Spinner extraClass="change-size" /> : ''}
            { props.recipeToEdit ? 'Update' : "Submit"}
            </button>
        </div>
        </form>
    </div>
  )
}
