import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

function Search() {
  const [value, setValue] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    getImages(value);
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
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
}

export default Search;
