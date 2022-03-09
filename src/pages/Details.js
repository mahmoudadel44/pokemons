import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import DetailsCard from "../components/DetailsCard";
import Spinner from "../components/Spinner";
import NotFound from "./NotFound";

import { getPokemonsDetails } from "../redux/actions/getPokemonsDetails";

export const Details = () => {
  let { pathname } = window.location;
  let pokemonPathname = pathname.replace("/", "");

  const pokemonsDetails = useSelector(
    (state) => state.PokemonsDetails.PokemonsDetails
  );
  const loading = useSelector((state) => state.PokemonsDetails.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsDetails(pokemonPathname.split("/")[1]));
  }, [dispatch, pokemonPathname]);

  if (!loading && !pokemonsDetails) {
    return <NotFound />;
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <DetailsCard PokemonsDetails={pokemonsDetails} key={pokemonsDetails.id} />
  );
};
