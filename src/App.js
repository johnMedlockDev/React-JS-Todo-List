import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

// Constructs JS components from the components folder
class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
