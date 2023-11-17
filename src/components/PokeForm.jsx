import { useState } from "react";

const PokeForm = ({setPokemonList, pokemonList}) => {

const [name, setName] = useState(``);
  // <h1>Name: {pokeDetails.name}</h1>
  // <h3>Base Experience: {pokeDetails.base_experience}</h3>
  // <h4>Weight: {pokeDetails.weight}</h4>
  // <h5>Height: {pokeDetails.height} </h5>
  // <img src={curImageURL} alt="pokemon" width="400px" />

  return (
    <form>
      <h1>Add Your Own Pokemon</h1>
      
      <label htmlFor="name">Pokemon Name: </label>
      <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="move">Move: </label>
      <input type="text" name="move" id="move" required />
      <br />
      <label htmlFor="height">Height: </label>
      <input type="text" name="height" id="height" required />
      <br />
      <label htmlFor="weight">Weight: </label>
      <input type="text" name="weight" id="weight" required />
      <br />
      <label htmlFor="base_experience">Base Experienc: </label>
      <input type="text" name="base_experience" id="base_experience" required />
      <br />
      <label htmlFor="url">Image URL starting with https:// </label>
      <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" required />
      <br />
      <input type="submit" name="submit" id="submit" 
      onClick={(e) => {
        e.preventDefault();
        setPokemonList([...pokemonList, {name}])

      }}
      />
      <br />

    </form>

  )
}



export default PokeForm;