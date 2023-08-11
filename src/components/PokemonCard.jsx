import { useEffect, useState } from "react";
import "../assets/css/pokemonCard.css";
import "../assets/css/footer.css";
import pokebola from "../assets/pokebola.png";
import "../assets/css/header.css";

export const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemons(data.results);
      });
  }, []);

  const [index, setIndex] = useState(0);
  console.log(index);

  const handleNextClick = () => {
    const newIndex = index + 20;
    setIndex(newIndex);

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${newIndex}&limit=20`)
      .then((response) => response.json())
      .then((newData) => {
        console.log(newData);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  };

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
              <h2>{pokemon.name}</h2>
            </a>
          </li>
        ))}
      </ul>
      <div className="footer">
        <button className="btn">Back</button>
        <button className="btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};
