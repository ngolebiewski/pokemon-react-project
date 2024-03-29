import { useEffect, useState } from "react";

const PokeDetailView = ({ selectedPokemon, setSelectedPokemon, pokemonList, setPokemonList }) => {
  const [pokeDetails, setPokeDetails] = useState({});
  const [curImageURL, setCurImageURL] = useState('https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png');
  const [curMove, setCurMove] = useState('');

  const individualPokeObject = pokemonList.find((element) => element.name === selectedPokemon)
  console.log(individualPokeObject.createdByHuman)

  if (!individualPokeObject.createdByHuman) {

    try {
      useEffect(() => {

        const fetchPokemonDetails = async () => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
          const data = await response.json();
          setPokeDetails(data);
          setCurImageURL(data.sprites.front_default);
          setCurMove(data.moves[0].move.name);
        }
        fetchPokemonDetails()

      }, [setPokeDetails]);
    }
    catch (error) {
      console.log("error", error)
    }

    return (
      <>
        <section className="pokemon-card">
          <h1>Name: {pokeDetails.name}</h1>
          <h2>Move: {curMove}</h2>
          <h5>Base Experience: {pokeDetails.base_experience}</h5>
          <h5>Weight: {pokeDetails.weight}</h5>
          <h5>Height: {pokeDetails.height} </h5>
          <img src={curImageURL} alt="pokemon" width="300px" />
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
  else {

    //user-entered data shows here!
    return (
      <>
        <section className="pokemon-card">
          <h1>Name: {individualPokeObject.name}</h1>
          <h2>Move: {individualPokeObject.move}</h2>
          <h5>Base Experience: {individualPokeObject.base_experience}</h5>
          <h5>Weight: {individualPokeObject.weight}</h5>
          <h5>Height: {individualPokeObject.height} </h5>
          <img src={individualPokeObject.imageUrl} alt="pokemon" width="300px" />
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


}
export default PokeDetailView;


//////Pseudo Code/////////

//Fetch details from selected Pokemon and display them here.
//import useEffect
//fetch pokemon api for specific pokemon
//put that in state
//put details in below
//make back button
//Extra Time? Style this to look like a real Pokemon card with eye-exploding colors.