import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      // style function for todoitems see line 15
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        {/* props passed down from todos.js */}
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button>X</button>
        </p>
      </div>
    );
  }
}

TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
