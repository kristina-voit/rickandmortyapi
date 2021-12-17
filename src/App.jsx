import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Components/Card";
import { Route, Routes, NavLink } from "react-router-dom";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const allCharacters = data.results.slice(0, 10).map((character) => ({
          name: character.name,
          species: character.species,
          image: character.image,
          gender: character.gender,
          status: character.status,
          origin: character.origin.name,
          location: character.location.name,
        }));

        setCharacters(allCharacters);
      });
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Wiki</h1>
<NavLink to ="/">Home </NavLink>
<NavLink to ="favourites">Favourite Characters </NavLink>
<NavLink to ="episodes">Episodes </NavLink>








<Routes>
  <Route path="/" element={<h2>Welcome to Rick and Morty</h2>}/>
  <Route path="favourites" element={<Favourite-Characters/>}/>
  <Route path="episodes" element={<Episodes/>}/>
</Routes>


      {characters.map((char, index) => (
        <Card
          key={index}
          name={char.name}
          species={char.species}
          image={char.image}
          gender={char.gender}
          status={char.status}
          origin={char.origin}
          location={char.location}
        />
      ))}
    </div>
  );
}

export default App;
