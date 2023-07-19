import React, { useState } from 'react'

export default function PokeInput(props) {

    const [pokeName, setPokeName] = useState('');

    function onFormSubmit(e){
        e.preventDefault();

        props.onCreateEntry(pokeName);
        setPokeName('');
    }


    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className='input-group mb-3'>
                    <input
                    onChange={(e) => setPokeName(e.target.value)}
                    className='form-control'
                    placeholder='Enter Pokémon Name'
                    type='text'
                    id='input'
                    ></input>
                    <button className="btn btn-danger" type="submit">Enter</button>
                </div>
            </form>
        </div>
    )
}
