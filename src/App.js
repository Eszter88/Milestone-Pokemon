import React from "react";
import PokemonList from "./components/PokemonList";
import pokemons from "./pokedex.json";
import SearchForm from "./components/SearchForm";
{
  /* {JSON.stringify(pokemons)} */
}

function App() {
  const first50Element = pokemons.pokemon.slice(0, 50);
  return (
    <div className="App">
      <h1 className="title">Pokemons</h1>
      <SearchForm />
      <PokemonList pokemons={first50Element} />
    </div>
  );
}

export default App;
