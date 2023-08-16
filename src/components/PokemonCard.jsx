import { useEffect, useState } from "react";
import "../assets/css/pokemonCard.css";
import "../assets/css/footer.css";
import pokebola from "../assets/images/pokebola.png";
import "../assets/css/header.css";

export const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    const newIndex = index + 20;
    const newIndexMax = Math.min(newIndex, 1280);
    setIndex(newIndexMax);

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${newIndexMax}&limit=20`)
      .then((response) => response.json())
      .then((newData) => {
        setPokemons(newData.results);
      });
  };

  const handlePreviousClick = () => {
    const newIndex = index - 20;
    const newIndexMax = Math.max(newIndex, 0);
    setIndex(newIndexMax);

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${newIndexMax}&limit=20`)
      .then((response) => response.json())
      .then((newData) => {
        setPokemons(newData.results);
      });
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="header">
        <img src={pokebola} alt="Imagem da Pokebola" />
        <h1>Pokédex</h1>
      </div>

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
              <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            </a>
          </li>
        ))}
      </ul>
      <div className="footer">
        <button className="btn" onClick={handlePreviousClick}>
          Back
        </button>
        <button className="btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};
