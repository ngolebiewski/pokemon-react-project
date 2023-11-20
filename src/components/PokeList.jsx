import { useEffect, useState } from "react";
import PokeLiRow from "./PokeLiRow";




const PokeList = ({ selectedPokemon, setSelectedPokemon, pokemonList, setPokemonList }) => {
  
  {pokemonList.length < 1?

  useEffect(() => {
    try {
      const fetchPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=15');
        const data = await response.json();
        const ourData = data.results
        ourData.map((eachPoke) => {eachPoke.createdByHuman = false});
        setPokemonList(ourData);
        console.log('I just fetched a list of pokemon from the API - XOXO, computer')
      }
      fetchPokemonList();
    }
    catch (error) {
      console.log(`Sorry, no Pokemon here, download PokemonGO and enjoy AR instead.`)
    }
  }, [])
  :
  console.log('skipped the API');
}

  return (
    <>
      <h1>Pokemon List</h1>
      <ol className="pokemon-card">
        {
          pokemonList.map((eachPokemon) => {
            return <PokeLiRow key={eachPokemon.name}
              eachPokemon={eachPokemon}
              setSelectedPokemon={setSelectedPokemon} />
          })
        }
      </ol>
      
    </>
  )
}

export default PokeList;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////    Pseudo-code and dummy list (no longer needed)    //////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

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
    url: "https://pokeapi.co/api/v2/pokemon/23/"
  }];


//get list of Pokemon from API
//create state variable to hold an array of pokemon names
//fetch pokemon names from api
//make async/await function inside Pokelist Fn
//display Pokemon in List
//pass pokemon Props down to PokeLiRow to fill in the unordered list.