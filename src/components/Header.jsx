import pokebola from "../assets/pokebola.png";
import "../assets/css/header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src={pokebola} alt="pokebola" />
      <h1>Pokédex</h1>
    </div>
  );
};
