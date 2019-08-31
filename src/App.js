import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

// Constructs JS components from the components folder
class App extends Component {
  // State needs to be availibe to all the componets so we're putting it in app.js
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div>
        {/* Todos Component -> import Todos from "./components/Todos" */}
        {/* Passed state to Todos in a prop */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
