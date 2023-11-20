import PokeDetailView from './PokeDetailView'
import PokeDetailViewMadeByHuman from './PokeDetailViewMadeByHuman'

const WhichDetailView = ( {selectedPokemon, setSelectedPokemon, pokemonList, setPokemonList }) => {
  console.log(selectedPokemon)

  {const foundIndex = pokemonList.find((element) => element == selectedPokemon);
    console.log(foundIndex);
    console.log(pokemonList[foundIndex])
//   {pokemonList.selectedPokemon.createdByHuman? 

//   <PokeDetailViewMadeByHuman selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
//   pokemonList={pokemonList} setPokemonList={setPokemonList} />
// :
//   <PokeDetailView selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} 
//   pokemonList={pokemonList} setPokemonList={setPokemonList} />

// }
}
return (<p>'hi'</p>)
}

export default WhichDetailView;