import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <>
      {" "}
      <Link to={`/${pokemon.name}`}>
        <div className="card-container">
          <div>
            {" "}
            <img src={pokemon.gifUrl} alt="monster" width={70} height={70} />
          </div>
          <div>
            {" "}
            <h2>{pokemon.name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
