import React from "react";

//Components
import PokemonsCard from "./PokemonsCard";

const CardList = ({ pokemons, index }) => {
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => (
        <PokemonsCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export default CardList;
