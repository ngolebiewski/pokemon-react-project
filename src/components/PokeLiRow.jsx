const PokeLiRow = ({ eachPokemon, setSelectedPokemon }) => {
  return (
    <li onClick={
      () => {
        setSelectedPokemon(eachPokemon.name);
        console.log(`you selected ${eachPokemon.name}`)
      }
    }>
      {eachPokemon.name}
    </li>
  )
}

export default PokeLiRow;

//pull down state: list of pokemon
//add onClick function