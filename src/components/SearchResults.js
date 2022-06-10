import React from "react";
import "../styles/search-results.css";
import testImage from "../assets/images/test-image.jpeg";

const SearchResults = ({ results }) => {
  return results && results.length > 0 ? (
    <>
      <p className="search-results-text">Search Results</p>
      <img className="search-result" src={testImage} alt="test-result"></img>
    </>
  ) : (
    <p className="search-results-text">No results</p>
  );
};

export default SearchResults;
