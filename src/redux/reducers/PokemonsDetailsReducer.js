import * as types from "../types/types";

const initialState = {
  PokemonsDetails: null,
  loading: true,
};

const PokemonsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POKEMONS_DETAILS:
      return {
        ...state,
        PokemonsDetails: action.payload,
        loading: false,
      };
    case types.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default PokemonsDetailsReducer;
