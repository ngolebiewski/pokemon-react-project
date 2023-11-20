import { useState } from "react";

const PokeForm = ({ setPokemonList, pokemonList }) => {

  const [name, setName] = useState(``);
  const [move, setMove] = useState(``);
  const [height, setHeight] = useState(``);
  const [weight, setWeight] = useState(``);
  const [base_experience, setBase_experience] = useState(``);
  const [imageUrl, setImageUrl] = useState(``);
  

  return (
    <>
      <h1>Add Your Own Pokemon</h1>

      <form className="pokemon-card">
        <label htmlFor="name">Pokemon Name: </label>
        <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="move">Move: </label>
        <input type="text" name="move" id="move" required onChange={(e) => setMove(e.target.value)} />
        <br />
        <label htmlFor="height">Height: </label>
        <input type="text" name="height" id="height" required onChange={(e) => setHeight(e.target.value)} />
        <br />
        <label htmlFor="weight">Weight: </label>
        <input type="text" name="weight" id="weight" required onChange={(e) => setWeight(e.target.value)} />
        <br />
        <label htmlFor="base_experience">Base Experience: </label>
        <input type="text" name="base_experience" id="base_experience" required onChange={(e) => setBase_experience(e.target.value)} />
        <br />
        <label htmlFor="imageUrl">Image URL: </label>
        <input type="imageUrl" name="imageUrl" id="imageUrl" placeholder="https://example.com" pattern="https://.*" onChange={(e) => setImageUrl(e.target.value)} />
        <br />
        
        <input type="submit" name="submit" id="submit"
          onClick={(e) => {
            e.preventDefault();
            setPokemonList([...pokemonList, { name, move, height, weight, base_experience, imageUrl, 'createdByHuman':true, }])
          }}
        />

        <br />

      </form>
    </>
  )
}



export default PokeForm;