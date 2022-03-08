import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="contain">
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
