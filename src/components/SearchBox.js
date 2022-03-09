import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="contain animate__animated animate__fadeInDown animate__delay-1s">
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
