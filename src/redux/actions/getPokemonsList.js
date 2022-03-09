import axios from "axios";
import * as types from "../types/types";

export const getPokemons = async (dispatch) => {
  try {
    dispatch({ type: types.LOADING });
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        dispatch({
          type: types.GET_POKEMONS_LIST,
          payload: response.data.results,
        });
      });
  } catch (error) {
    dispatch({ type: types.LOADING });
    console.log("errrrrrrrrrrrr");
  }
};
