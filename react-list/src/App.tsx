import pokemonData from "./data/pokemon.json";
import { PokemonRow } from "./components/PokemonRow";

function App() {
  return (
    <div>
      {pokemonData.map((item) => (
        <PokemonRow key={item.id} pokemon={item} />
      ))}
    </div>
  );
}

export default App;
