import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHighResImageUrl, capitalizeFirstLetter } from "../pokemonUtils";
import "../assets/css/pokemonDetails.css";

export const PokemonDetails = () => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDetail(data);
      });
  }, []);

  function formatStatName(name) {
    return name
      .split("-")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  }

  return (
    <>
      <div className="container">
        <div className="card-detail">
          {pokemonDetail ? (
            <div>
              <h1>{capitalizeFirstLetter(pokemonDetail.name)}</h1>
              <div className="diplay-grid">
                <img
                  className="pokemon-img"
                  src={getHighResImageUrl(pokemonDetail.id)}
                  alt={pokemonDetail.name}
                />
                <ul className="info">
                  <li>
                    <strong>Height</strong>
                    <br />
                    {pokemonDetail.height} cm
                  </li>
                  <li>
                    <strong>Weight</strong>
                    <br />
                    {(pokemonDetail.weight / 10).toFixed(1)} Kg
                  </li>
                  <li>
                    <strong>Type</strong>
                    <br />
                    {pokemonDetail.types.map((type, index) => (
                      <span key={index} id="type" className={type.type.name}>
                        {capitalizeFirstLetter(type.type.name)}
                        {index < pokemonDetail.types.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
              <ul className="more-info">
                <li className="ability">
                  <strong>Ability</strong>
                  {pokemonDetail.abilities.map((ability, index) => (
                    <span key={index}>
                      {capitalizeFirstLetter(ability.ability.name)}
                      {index < pokemonDetail.abilities.length - 1 ? " " : ""}
                    </span>
                  ))}
                </li>
                <li className="stats">
                  <strong>Stats</strong>
                  <div className="stat">
                    {pokemonDetail.stats.map((stat, index) => (
                      <span key={index}>
                        {stat.base_stat}
                        <br />
                        {formatStatName(stat.stat.name)}
                        {index < pokemonDetail.stats.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <p>C...</p>
          )}
        </div>
      </div>
    </>
  );
};
