import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Components/Card'

import './App.css'

function App() {
const [characters, setCharacters] = useState([]);

useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {

    const allCharacters = data.results.slice(0, 10).map((character) => ({
      name: character.name,
      species: character.species,
      image: character.image,
      gender: character.gender,
      status: character.status,
      origin: character.origin.name,
      location: character.location.name
    }));

    setCharacters(allCharacters)

  });
}
, []);



return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
   
      {characters.map((char, index) => (
    <Card key={index} name={char.name} species={char.species} image={char.image} gender={char.gender} status={char.status} origin={char.origin} location={char.location}/>))
      }
    </div>
      
  )
}

export default App