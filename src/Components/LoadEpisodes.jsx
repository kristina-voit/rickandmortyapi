import CardEpisode from "./CardEpisode";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../lib/LocalStorage";

//Singular immer verkürzt zu char/ favChar etc.; Plural immer ausgeschrieben

function LoadEpisode() {
  const [episodes, setEpisodes] = useState(loadFromLocal("_EPISODES") ?? []);
  const [favEpisodes, setFavEpisodes] = useState(
    loadFromLocal("_FAVOURITES") ?? []
  );
  useEffect(() => saveToLocal("_FAV_EPISODES", favEpisodes), [favEpisodes]);

  const isFavEpisode = (favChar) =>
    favEpisodes.some((every) => every.id === favChar.id);

  const removeFromFavourites = (favChar) =>
    favEpisodes.filter((every) => every.id !== favChar.id);

  function addToFavourites(favChar) {
    if (isFavEpisode(favChar)) {
      const keepFavourites = removeFromFavourites(favChar);
      setFavEpisodes(keepFavourites);
    } else {
      setFavEpisodes([...favEpisodes, favChar]);
      //console.log(favEpisodes)
    }
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        const allEpisodes = data.results.slice(0, 10).map((episode) => ({
          id: episode.id,
          name: episode.name,
          air_date: episode.air_date,
          epsiode_no: episode.episode,
        }));
        saveToLocal("EPISODES", allEpisodes);
        setEpisodes(allEpisodes);
      });
  }, []);

  return (
    <>
      {episodes.map((episode) => (
        <CardEpisode
          episode={episode}
          key={episode.id}
          id={episode.id}
          name={episode.name}
          air_date={episode.air_date}
          episode_no={episode.epsiode_no}
          onAddToFavourites={addToFavourites}
          isFav={isFavEpisode(episode)}
        />
      ))}
    </>
  );
}

export default LoadEpisode;
