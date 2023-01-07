import React, { Component } from "react";
import Homes from "./pages/Homes/Homes";
import Posts from "./pages/Posts/Posts";
import Adds from "./pages/Adds/Adds";
import "./App.css";

function App() {
  return (
    <div>
      <Homes />
      <Adds />
      <Posts />
      
    </div>
  );
}

export default App;
