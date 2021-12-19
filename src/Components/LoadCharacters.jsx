import Card from "./Card";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../lib/LocalStorage";

//Singular immer verkürzt zu char/ favChar etc.; Plural immer ausgeschrieben

function LoadCharacters() {
  const [characters, setCharacters] = useState(
    loadFromLocal("_CHARACTERS") ?? []
  );
  const [favCharacters, setFavCharacters] = useState(
    loadFromLocal("_FAVOURITES") ?? []
  );

  const [species, setSpecies] = useState(characters);

  useEffect(() => saveToLocal("_FAVOURITES", favCharacters), [favCharacters]);

  const isFavChar = (favChar) =>
    favCharacters.some((every) => every.id === favChar.id);

  const removeFromFavourites = (favChar) =>
    favCharacters.filter((every) => every.id !== favChar.id);

  function addToFavourites(favChar) {
    if (isFavChar(favChar)) {
      const keepFavourites = removeFromFavourites(favChar);
      setFavCharacters(keepFavourites);
    } else {
      setFavCharacters([...favCharacters, favChar]);
      //console.log(favCharacters)
    }
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const allCharacters = data.results.map((character) => ({
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          gender: character.gender,
          status: character.status,
          origin: character.origin.name,
          location: character.location.name,
        }));
        saveToLocal("_CHARACTERS", allCharacters);
        setCharacters(allCharacters);
      });
  }, []);

  const speciesFilter = (searchTerm) =>
    characters.filter((every) => every.species == searchTerm);

  const sortBySpecies = (event) => {
    let inputValue = event.target.value;
    if (inputValue === "All") {
      setSpecies(characters);
    } else {
      setSpecies(speciesFilter(inputValue));
    }
  };
  return (
    <>
      <div>
        <label htmlFor="filter">Filter by Species</label>
        <select name="filter" id="filter" onChange={sortBySpecies}>
          {" "}
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
      {species.map((char) => (
        <Card
          char={char}
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          image={char.image}
          gender={char.gender}
          status={char.status}
          origin={char.origin}
          location={char.location}
          onAddToFavourites={addToFavourites}
          isFav={isFavChar(char)}
        />
      ))}
    </>
  );
}

export default LoadCharacters;
