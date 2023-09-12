import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetails } from "./components/PokemonDetails";
import { PokemonCard } from "./components/PokemonCard";
import "./assets/css/index.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonCard />} />
        <Route path="/detalhes" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
