import React from 'react';

export default function RecipeTable(props) {

    function createIngredientsList(ingredients) {
        return (
            <ul className="list-group text-center">
            {ingredients.map((ing) => {
                return (<li className='list-group-item'>{ing}</li>);
            })}
            </ul>
        )
    }
    
    return (
    <div>
        {  
        props.recipes.map((recipe) => {
            return (
            <div className='card my-3 mx-4 p-3'>
                <table className='table text-center'>
                    <thead>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <td className='align-middle'>{recipe.name}</td>
                        <td className='align-middle'>{createIngredientsList(recipe.ingredients)}</td>
                        <td className='align-middle'>{recipe.instructions}</td>
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
        }
    </div>
    )
}
