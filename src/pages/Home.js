import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import NotFound from "./NotFound";
import Spinner from "../components/Spinner";
import { getPokemons } from "../redux/actions/getPokemonsList";

//images
import PokemonImg from "../assets/pokemonimg.png";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const pokemonsData = useSelector((state) => state.PokemonsList.Pokemons);
  const loading = useSelector((state) => state.PokemonsList.loading);

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
  if (!loading && !pokemonsData) {
    return <NotFound />;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="pokemonImgContent animate__animated animate__fadeInDown">
        <img src={PokemonImg} alt="pokemon" width={210} height={200} />
      </div>
      <SearchBox
        handleChange={handleChange}
        placeholder="search pokemon ......."
      />
      <div className="countContainer">
        <span className="animate__animated animate__fadeInTopLeft animate__delay-1s">
          Generation 1
        </span>
        <span className="pokemonsCount animate__animated animate__fadeInTopRight animate__delay-1s">
          {filteredPokemons.length} Pokemons
        </span>
      </div>
      <CardList pokemons={filteredPokemons} />
    </>
  );
};

export default Home;
