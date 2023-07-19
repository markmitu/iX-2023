import React from 'react'

export default function PokeTable(props) {
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                   <th>Name</th> 
                   <th>Nature(s)</th>
                   <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
            props.pokes.map((pokemon) => {
                return (
                    <tr key={pokemon.id}>
                        <td>{pokemon.name}</td>
                        <td>
                           <div className='container text-center'>
                                <ul className='list-group'>
                                {
                                pokemon.natures.map((n) => {
                                    return (
                                        <li className='list-group-item'>{n}</li>
                                )
                                })
                                }
                                </ul>
                           </div>
                        </td>
                        <td>
                            <div onClick={() => props.onDeleteEntry(pokemon.id)}>
                                <i className="bi bi-trash"> </i>
                            </div>
                        </td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    </div>
  )
}
