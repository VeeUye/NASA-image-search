import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  const images = results?.map((image, index) => (
    <img
      key={index}
      className="search-results-image"
      src={image}
      alt="search results"
    ></img>
  ));
  return results && results.length > 0 ? (
    <>
      <p className="search-results-text">Search Results</p>
      <div className="search-results-wrap">
        <div className="search-results">{images}</div>
      </div>

      {/* <img className="search-result" src={testImage} alt="test result"></img> */}
    </>
  ) : (
    <p className="search-results-text">No results</p>
  );
};

export default SearchResults;
