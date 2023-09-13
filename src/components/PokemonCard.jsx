import { useEffect, useState } from "react";
import "../assets/css/pokemonCard.css";
import "../assets/css/footer.css";
import pokebola from "../assets/images/pokebola.png";
import "../assets/css/header.css";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, getHighResImageUrl } from "../pokemonUtils";

export const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, [index]);

  const handleNextClick = () => {
    const newIndex = index + 20;
    const newIndexMax = Math.min(newIndex, 1280);
    setIndex(newIndexMax);
  };

  const handlePreviousClick = () => {
    const newIndex = index - 20;
    const newIndexMax = Math.max(newIndex, 0);
    setIndex(newIndexMax);
  };

  const extractIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <>
      <div className="header">
        <img src={pokebola} alt="Imagem da Pokebola" />
        <h1>Pokédex</h1>
      </div>

      <ul className="list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.url} className="card">
            <Link to={`/pokemon/${extractIdFromUrl(pokemon.url)}`}>
              <img
                className="sprite"
                src={getHighResImageUrl(pokemon.url.split("/")[6])}
              />
              <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            </Link>
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
