import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import nasaLogo from "../assets/images/nasa-logo.jpeg";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <div className="header-wrap">
        <img className="nasa-logo" src={nasaLogo} alt="Nasa Logo"></img>
        <Search setSearchResults={setSearchResults} />
      </div>
      <SearchResults results={searchResults} />
    </div>
  );
};
export default App;
