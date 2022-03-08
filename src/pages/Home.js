import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import { getPokemons } from "../redux/actions/getPokemonsList";

//images
import PokemonImg from "../assets/pokemonimg.jpg";
const Home = () => {
  const [searchField, setSearchField] = useState("");
  const pokemonsData = useSelector((state) => state.PokemonsList.Pokemons);
  const dispatch = useDispatch();

  const loadPokemons = useCallback(() => {
    dispatch(getPokemons);
  }, [dispatch]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const filteredPokemons = pokemonsData.filter((pokemon) =>
    pokemon.name.includes(searchField)
  );
  return (
    <>
      <div className="pokemonImgContent">
        <img src={PokemonImg} alt="pokemon" width={180} height={180} />
      </div>
      <SearchBox handleChange={handleChange} placeholder="search pokemon" />
      <CardList pokemons={filteredPokemons} />
    </>
  );
};

export default Home;
