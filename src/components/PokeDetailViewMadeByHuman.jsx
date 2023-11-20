import { useEffect, useState } from "react";

const PokeDetailViewMadeByHuman = ({ selectedPokemon, setSelectedPokemon, pokemonList, setPokemonList }) => {
  
  return (
    <>
      <h1>user details working!</h1>
      <section className="pokemon-card">
        <h1>Name: {pokemonList.selectedPokemon.name}</h1>
        {/* <h2>Move: {pokeDetails.move}</h2>
        <h5>Base Experience: {pokeDetails.base_experience}</h5>
        <h5>Weight: {pokeDetails.weight}</h5>
        <h5>Height: {pokeDetails.height} </h5>
        <img src={pokeDetails.imageUrl} alt="pokemon" width="300px" /> */}
        <br />
        <button
          onClick={() => {
            setSelectedPokemon(null);
            setPokeDetails({});
          }} >
          Back</button>
      </section>
    </>
  )
  
        }
export default PokeDetailViewMadeByHuman;