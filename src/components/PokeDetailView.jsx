//Fetch details from selected Pokemon and display them here.
  //import useEffect
  //fetch pokemon api for specific pokemon
  //put that in state
  //put details in below
//make back button
//Extra Time? Style this to look like a real Pokemon card with eye-exploding colors.

import { useEffect, useState } from "react";

const PokeDetailView = ({selectedPokemon, setSelectedPokemon}) =>{
  const [pokeDetails, setPokeDetails] = useState({});

//   console.log(pokeDetails, 'default state')
// console.log('line 14', selectedPokemon)

 try{
  
  useEffect(() =>{
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      const data = await response.json();
      setPokeDetails(data);
      console.log(pokeDetails)
    }
    fetchPokemonDetails()
    
  }, [pokeDetails]);
}
catch (error) {
  console.log("error", error)
} 

console.log(pokeDetails)
// const imageURL = pokeDetails.sprites.front_default

  return(
    <>
      <h1>Name: {pokeDetails.name}</h1>
      <h3>Base Experience: {pokeDetails.base_experience}</h3>
      <h4>Weight: {pokeDetails.weight}</h4>
      <h5>Height: {pokeDetails.height} </h5>
      {/* <img src={imageURL}/> */}
      <button
        onClick={() =>{
          setSelectedPokemon(null);
          setPokeDetails({});
        }}
      
      >Back</button>
    </>
  )

}

export default PokeDetailView;