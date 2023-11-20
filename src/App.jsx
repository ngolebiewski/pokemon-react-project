import { useState } from 'react'
import './App.css'
import PokeList from './components/PokeList.jsx'
import PokeDetailView from './components/PokeDetailView'
import PokeForm from './components/PokeForm'
// import PokeDetailViewMadeByHuman from './components/PokeDetailViewMadeByHuman'
// import WhichDetailView from './components/WhichDetailView'



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
        <div>
        <PokeDetailView selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
        pokemonList={pokemonList} setPokemonList={setPokemonList}
        />
        </div>
      }

    </>
  )
}

export default App
