import axios from "axios";
import * as types from "../types/types";

export const getPokemonsDetails = (text) => async (dispatch) => {
  try {
    dispatch({ type: types.LOADING });
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${text}`)
      .then((response) => {
        dispatch({
          type: types.GET_POKEMONS_DETAILS,
          payload: response.data,
        });
      });
  } catch (error) {
    dispatch({ type: types.LOADING });
    console.log("errrrrrrrrrrrr");
  }
};
