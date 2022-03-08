import React from "react";

const DetailsCard = ({ PokemonsDetails }) => {
  const goToList = () => {
    window.location.replace("/");
  };
  return (
    <div className="deatilsCardContainer">
      <div className="detailsCard">
        <div className="closeBtn" onClick={() => goToList()}>
          <span>&times;</span>
        </div>
        <div className="pokemonWithTitle">
          <div>
            <img
              src={PokemonsDetails?.sprites?.front_default}
              alt="pokemonImg"
              width={120}
              height={120}
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
