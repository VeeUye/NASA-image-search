import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

  return (
    <>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="moon"
          onChange={(e) => setValue(e.target.value)}
        />
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
