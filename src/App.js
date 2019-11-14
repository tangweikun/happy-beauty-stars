import React from "react";
import { BeautyStar } from "./BeautyStar";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1 style={{ textAlign: "center", color: "#fff" }}>Beauty Stars</h1>
      <BeautyStar />
    </div>
  );
}

export default App;
