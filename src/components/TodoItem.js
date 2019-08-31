import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {/* props passed down from todos.js */}
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default TodoItem;
