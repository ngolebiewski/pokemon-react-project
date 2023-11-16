const PokeLiRow = ({eachPokemon}) => {
  return (
    <li>
      {eachPokemon.name}
    </li>
  )
}

export default PokeLiRow;

//pull down state: list of pokemon
//add onClick function