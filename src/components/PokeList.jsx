import { useState } from "react";
import PokeLiRow from "./PokeLiRow";


  
const dummyPokemonList = [
  {
    name: "spearow",
    url: "https://pokeapi.co/api/v2/pokemon/21/"
  },
  {
    name: "fearow",
    url: "https://pokeapi.co/api/v2/pokemon/22/"
  },
  {
    name: "ekans",
    url:	"https://pokeapi.co/api/v2/pokemon/23/"}];


//get list of Pokemon from API
  //create state variable to hold an array of pokemon names
  //fetch pokemon names from api
    //make async/await function inside Pokelist Fn
//display Pokemon in List
  //pass pokemon Props down to PokeLiRow to fill in the unordered list.
  const PokeList = () => {
  const [pokemonList, setPokemonList] = useState(dummyPokemonList)

  return (
    <>
      <h1>Pokemon List</h1>
      <ul>
        {
        pokemonList.map((eachPokemon) => {
        return <PokeLiRow eachPokemon={eachPokemon}/>}) 
  }
      </ul>
    </>
  )
}

export default PokeList;