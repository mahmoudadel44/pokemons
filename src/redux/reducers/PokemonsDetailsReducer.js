import * as types from "../types/types";

const initialState = {
  PokemonsDetails: [],
};
const PokemonsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POKEMONS_DETAILS:
      return {
        ...state,
        PokemonsDetails: action.payload,
      };
    default:
      return state;
  }
};

export default PokemonsDetailsReducer;
