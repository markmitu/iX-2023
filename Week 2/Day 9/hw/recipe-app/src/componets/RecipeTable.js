import React from 'react';

import Spinner from './Day 11 componets/Spinner';


export default function RecipeTable(props) {

    function createIngredientsList(ingredients) {
        return (
            <ul className="">
            {ingredients.map((ing) => {
                return (<li>{ing}</li>);
            })}
            </ul>
        )
    }
    
    return (
    <div>
    { props.loading ? (
      <Spinner></Spinner>
    ) : (  
        props.recipes.map((recipe) => {
            return (
            <div className='card my-3 mx-5 p-3'>
                <table className='table'>
                    <thead>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <td className='align-middle'>{recipe.name}</td>
                        <td className='align-middle'>{createIngredientsList(recipe.ingredients)}</td>
                        <td className='mt-2'>{recipe.instructions}</td>
                        <td className='align-middle'>
                            <button
                            className='btn btn-outline-danger me-1'
                            onClick={() => props.onDeleteRecipe(recipe.id)}
                            >Delete</button>
                        </td>
                    </tbody>
                </table>
            </div>
            )
        })
    ) }
    </div>

    )
}
