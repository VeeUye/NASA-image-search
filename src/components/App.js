import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import nasaLogo from "../assets/images/nasa-logo.jpeg";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchresults, setSearchResults] = useState();

  return (
    <div className="app">
      <img className="nasa-logo" src={nasaLogo} alt="Nasa Logo"></img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
};
export default App;
