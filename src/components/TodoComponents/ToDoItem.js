import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <p>{props.i.task}</p>
    </div>
  );
}

export default ToDoItem;
