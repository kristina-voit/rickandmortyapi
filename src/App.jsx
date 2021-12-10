import { useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css'

function App() {
const [characters, setCharacters] = useState([]);
console.log(characters)
useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {

    const allCharacters = data.results.slice(0, 10).map((character) => ({
      name: character.name,
      species: character.species,
      image: character.image,
    }));

    setCharacters(allCharacters)

  });
}, []);

function addTodo(todo) {
  setCharacters([...todos, todo]);
}



return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
     
     <div>TEST</div>
     
     
      {/*{characters &&
        characters.map((characters, index) => (
          <Card key={index} name={character.name} species={character.species} />
        ))} */}
    </div>
      
  )
}

export default App


