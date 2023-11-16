//Fetch details from selected Pokemon and display them here.
//import useEffect
//fetch pokemon api for specific pokemon
//put that in state
//put details in below
//make back button
//Extra Time? Style this to look like a real Pokemon card with eye-exploding colors.

import { useEffect, useState } from "react";

const PokeDetailView = ({ selectedPokemon}) => {
  const [pokeDetails, setPokeDetails] = useState({});

  console.log(selectedPokemon)
  try {
    useEffect(() => {
      const fetchPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        const data = await response.json();
        setPokeDetails(data);
      }
      fetchPokemonDetails()
    }, []);
  }
  catch (error) {
    console.log("error", { error })
  }

  return (
    <>
      <h1>Name: {pokeDetails.name}</h1>

      <h3>Base Experience: {pokeDetails.base_experience}</h3>
      <h4>Weight: {pokeDetails.weight}</h4>
      <h5>Height: {pokeDetails.height} </h5>
      <img src={pokeDetails.sprites.front_default} alt="pokemon" width="300px" />
    </>
  )

}
  // {/* <button onClick={() => {
  //       setSelectedPokemon(null);
  //     }}>
  //       Back to list
  //     </button> */}

export default PokeDetailView;