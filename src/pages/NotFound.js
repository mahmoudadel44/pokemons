import React from "react";
import { Link } from "react-router-dom";

//images
import NotFoundImg from "../assets/notFoundImg.jpg";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img src={NotFoundImg} alt="notfoundimg" height={500} width={500} />

      <Link to={"/pokemon"}>Go To Pokemons</Link>
    </div>
  );
};

export default NotFound;
