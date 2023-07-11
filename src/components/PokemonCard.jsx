import { useEffect, useState } from "react";
const { VITE_POKE_API_BASE_URL } = import.meta.env;
import "../assets/css/pokemonCard.css";

export const PokemonCard = () => {
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
      <ul className="list">
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.url} className="card">
            <a href={pokemon.url} target="_blank" rel="noreferrer">
              <img
                className="sprite"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
              />
              <h2>{pokemon.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
