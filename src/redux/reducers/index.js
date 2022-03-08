import { combineReducers } from "redux";
import PokemonsDetailsReducer from "./PokemonsDetailsReducer";
import PokemonsListReducer from "./PokemonsListReducer";

const rootReducer = combineReducers({
  PokemonsList: PokemonsListReducer,
  PokemonsDetails: PokemonsDetailsReducer,
});
export default rootReducer;
