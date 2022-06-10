import React from "react";
import "../styles/search-results.css";

const SearchResults = () => {
  return (
    <>
      <p className="search-results-text">Search Results</p>
      <img
        className="search-result"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="test-result"
      ></img>
    </>
  );
};

export default SearchResults;
