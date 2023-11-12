"use client";

import pokemonData from "./data/pokemon.json";
import { PokemonRow } from "./components/PokemonRow";

export default function Home() {
  return (
    <div>
      {pokemonData.map((item) => (
        <PokemonRow key={item.id} pokemon={item} />
      ))}
    </div>
  );
}
