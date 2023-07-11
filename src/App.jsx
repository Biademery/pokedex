import { Header } from "./components/Header";
import { PokemonCard } from "./components/PokemonCard";
import { Footer } from "./components/Footer";
import "./assets/css/index.css";

export const App = () => {
  return (
    <>
      <Header />
      <PokemonCard />
      <Footer />
    </>
  );
};
