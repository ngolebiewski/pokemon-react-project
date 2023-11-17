import { useEffect, useState } from "react";
import PokeLiRow from "./PokeLiRow";
import PokeForm from "./PokeForm";


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

const PokeList = ({ selectedPokemon, setSelectedPokemon }) => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    try {
      const fetchPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=15');
        const data = await response.json();
        setPokemonList(data.results);
      }
      fetchPokemonList();
    }
    catch (error) {
      console.log(`Sorry, no Pokemon here, download PokemonGO and enjoy AR instead.`)
    }
  }, [])

  return (
    <>
      <h1>Pokemon List</h1>
      <ol>
        {
          pokemonList.map((eachPokemon) => {
            return <PokeLiRow key={eachPokemon.name}
              eachPokemon={eachPokemon}
              setSelectedPokemon={setSelectedPokemon} />
          })
        }
      </ol>
      <PokeForm setPokemonList={setPokemonList} pokemonList={pokemonList} />
    </>
  )
}

export default PokeList;