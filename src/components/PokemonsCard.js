import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <>
      {" "}
      <Link to={`${pokemon.name}`}>
        <div className="card-container animate__animated animate__jackInTheBox animate__delay-2s">
          <div>
            {" "}
            <img
              src={pokemon.gifUrl}
              alt="monster"
              width={70}
              height={70}
              className="animate__animated animate__fadeInDown animate__delay-2s"
            />
          </div>
          <div>
            {" "}
            <h2 className="animate__animated animate__fadeInUp animate__delay-2s">
              {pokemon.name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
