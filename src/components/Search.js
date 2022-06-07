import React from "react";
import { useState } from "react";
import "../styles/search.css";

const Search = () => {
  return (
    <>
      <form className="search-form">
        <input className="search-input" type="text" placeholder="moon" />
        <button
          className="search-button"
          type="submit"
          data-testid="button-text"
        >
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
