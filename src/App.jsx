import { useState } from 'react'
import './App.css'
import PokeList from './components/PokeList.jsx'
import PokeDetailView from './components/PokeDetailView'
import PokeForm from './components/PokeForm'

/*
Here are the instructions for today’s workshop.
- Create a React app that retrieves and displays a list of pokemon
- When you click on a pokemon in the list, it should go to a details page displaying more - information about it (probably want a back button as well)
- Add a form that allows the user to create their own pokemon
*/


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  {console.log(pokemonList)}


  return (
    <>

      {!selectedPokemon ?
     
        <div>
          <PokeList
            selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}
            pokemonList={pokemonList} setPokemonList={setPokemonList}
          />
          <PokeForm 
            setPokemonList={setPokemonList} pokemonList={pokemonList}
          />
        </div>
        :
        <PokeDetailView selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
        pokemonList={pokemonList} setPokemonList={setPokemonList}
        />

      }

    </>
  )
}

export default App
