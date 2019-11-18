import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ResturantList from "./components/ResturantList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ResturantList />
    </div>
  );
}

export default App;
