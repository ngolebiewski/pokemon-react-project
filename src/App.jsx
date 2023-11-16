import { useState } from 'react'
import './App.css'
import PokeList from './components/PokeList.jsx'

/*
Here are the instructions for today’s workshop.
- Create a React app that retrieves and displays a list of pokemon
- When you click on a pokemon in the list, it should go to a details page displaying more - information about it (probably want a back button as well)
- Add a form that allows the user to create their own pokemon
*/

function App() {


  return (
    <>
      <PokeList />
    </>
  )
}

export default App
