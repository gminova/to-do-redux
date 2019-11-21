import React from "react";
import PropType from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

Todo.PropType = {
  onClick: PropType.func.isRequired,
  completed: PropType.bool.isRequired,
  text: PropType.string.isRequired
};

export default Todo;
