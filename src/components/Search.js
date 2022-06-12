import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults(await getImages(value));
  };

  useEffect(() => {
    window.scrollTo(0, 70);
  }, [value]);

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
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
