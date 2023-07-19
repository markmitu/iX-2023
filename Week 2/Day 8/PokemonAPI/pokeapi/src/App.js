import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react';
import PokeInput from './Componets/PokeInput';
import PokeTable from './Componets/PokeTable';
import { Pokemon } from './models/Pokemon';

function App() {
  const [pokes, setPokes] = useState([]);

  // useEffect(() => {
  //   if (!pokes.length) {
  //     loadFromLocalStorage();
  //   }
  //  }, []);

  // useEffect(() => {
  //   saveToLocalSotrage();
  // }, [pokes]);

  async function fetchData(name) {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //   .then(res => res.json())
    //   .then(result => {
    //     // console.log(result.id);
    //     // console.log(result.name);
    //     // console.log(result.types[0].type.name);
    //     let types = [];
    //     for(let i = 0; i < result.types.length; i++) {
    //       types.push(result.types[i].type.name);
    //     }
    //     return new Pokemon(result.id, result.name, types);
    //   }
        
    //   )
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();
    
    let types = [];
    for (let i = 0; i < result.types.length; i++) {
      types.push(result.types[i].type.name);
    }

    return new Pokemon(result.id, result.name, types);
  }

  
  async function onCreateEntry(pokeName) {
    let pokemon = await fetchData(pokeName);
    setPokes([...pokes, pokemon]);
  }

  function onDeleteEntry(pokeName) {

  }

  // function loadFromLocalStorage() {
  //   const json = localStorage.getItem('pokes');
  //   if (json) {
  //     const pokesArr = JSON.parse(json);
  //     if (pokesArr.length) {
  //       setPokes(pokesArr.map((x) => Pokemon.fromJson(x)));
  //     }
  //   }
  // }

  // function saveToLocalSotrage() {
  //   const json = JSON.stringify(pokes);
  //   localStorage.setItem('pokes', json);
  // }

  return (
    <div className="App bg-dark pt-5">
      <div className="card p-4 mx-5">
        <h1>PokeAPI Search</h1>
        <hr/>
        <PokeInput
        onCreateEntry={onCreateEntry} 
        />
        <hr/>
        <PokeTable
        pokes={pokes}
        onDeleteEntry={onDeleteEntry}
        />
      </div>
    </div>
  );
}

export default App;
