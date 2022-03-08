import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsCard from "../components/DetailsCard";
import { getPokemonsDetails } from "../redux/actions/getPokemonsDetails";

export const Details = () => {
  let { pathname } = window.location;
  let myPathname = pathname.replace("/", "");

  const PokemonsDetails = useSelector(
    (state) => state.PokemonsDetails.PokemonsDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsDetails(myPathname));
  }, []);
  return (
    <DetailsCard PokemonsDetails={PokemonsDetails} key={PokemonsDetails.id} />
  );
};
