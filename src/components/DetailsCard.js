import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({ PokemonsDetails }) => {
  
  return (
    <div className="deatilsCardContainer animate__animated animate__zoomIn">
      <div className="detailsCard">
        <Link className="closeBtn" to={"/"}>
          <span>&times;</span>
        </Link>
        <div className="pokemonWithTitle">
          <div>
            <img
              src={PokemonsDetails?.sprites?.front_default}
              alt="pokemonImg"
              className="detailsCardImg"
            />
          </div>
          <h4>{PokemonsDetails.name}</h4>
        </div>
        <ul className="pokemonData">
          <li>
            <span>ID: </span> {PokemonsDetails.id}
          </li>
          <li>
            <span>Type: </span>
            <ul>
              {PokemonsDetails?.types?.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
          </li>{" "}
          <li>
            <span>Height: </span>
            {PokemonsDetails.height}
          </li>{" "}
          <li>
            <span>Habilities</span>
            <ul>
              {PokemonsDetails?.abilities?.map((abilitie) => (
                <li>{abilitie.ability.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsCard;
