import Card from './Card';
import { useEffect, useState } from "react";



function LoadCharacters() {
    const [characters, setCharacters] = useState([]);
    const [favProducts, setFavProducts] = useState([]);

    function isFavProduct(favProduct) {
        return favProducts.some((every) => every.id === favProduct.id);
      }
    
      function remFromFav(favProduct) {
        return favProducts.filter((every) => every.id !== favProduct.id);
      }
    
      function addToFavourites(favProduct) {
        if (isFavProduct(favProduct)) {
          const keepFavourite = remFromFav(favProduct);
          setFavProducts(keepFavourite);
        } else {
          setFavProducts([...favProducts, favProduct]);
        }
      }
    
    useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
        const allCharacters = data.results.slice(0, 10).map((character) => ({
            id: character.id,
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
        <>
            {characters.map((char) => (
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
               isFavourite={isFavProduct(char)}
                />
            ))}
        </>    
    )
}

export default LoadCharacters