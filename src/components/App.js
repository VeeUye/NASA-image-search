import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import nasaLogo from "../assets/images/nasa-logo.jpeg";

const App = () => {
  const [searchresults, setSearchResults] = useState();

  return (
    <div className="app">
      <img className="nasa-logo" src={nasaLogo} alt="Nasa Logo"></img>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
};
export default App;
