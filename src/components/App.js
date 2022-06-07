import React from "react";
import "../styles/app.css";
import Search from "./Search";
import nasaLogo from "../assets/images/nasa-logo.jpeg";

const App = () => {
  return (
    <div className="app">
      <img className="nasa-logo" src={nasaLogo} alt="Nasa Logo"></img>
      <Search />
    </div>
  );
};
export default App;
