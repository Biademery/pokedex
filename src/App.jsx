import { useEffect, useState } from "react";

const { VITE_POKE_API_BASE_URL } = import.meta.env;

export const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`${VITE_POKE_API_BASE_URL}pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.url}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
            />
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
