import * as types from "../types/types";

const initialState = {
  Pokemons: [],
  loading: true,
};
const PokemonsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POKEMONS_LIST:
      return {
        ...state,
        Pokemons: action.payload.map((r) => ({
          name: r.name,
          gifUrl: `https://img.pokemondb.net/sprites/black-white/anim/normal/${r.name}.gif`,
        })),
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

export default PokemonsListReducer;
