import React from "react";
import pokemons from "../pokedex.json";
import Pokemon from "./Pokemon";

function PokemonList(props) {
  function createList(pokemon) {
    return (
      <div>
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
          type={pokemon.type}
        />
      </div>
    );
  }

  return <div className="cardContainer">{props.pokemons.map(createList)}</div>;
}

export default PokemonList;
