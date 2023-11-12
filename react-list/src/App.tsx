import pokemonData from "./data/pokemon.json";

import { PokemonRow } from "./components/PokemonRow";

function App() {
  return (
    <div className="App">
      {pokemonData.map((item) => (
        <PokemonRow pokemon={item} />
      ))}
    </div>
  );
}

export default App;
