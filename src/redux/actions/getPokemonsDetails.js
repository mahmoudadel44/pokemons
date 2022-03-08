import axios from "axios";
import * as types from "../types/types";

export const getPokemonsDetails = (text) => async (dispatch) => {
  try {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${text}`)
      .then((response) => {
        console.log("response", response.data);
        dispatch({
          type: types.GET_POKEMONS_DETAILS,
          payload: response.data,
        });
      });
  } catch (error) {
    console.log("errrrrrrrrrrrr");
  }
};
