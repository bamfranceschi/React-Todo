import React from "react";
import ToDoItem from "./ToDoItem";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function ToDoList(props) {
  return (
    <div>
      {props.toDo.map(i => (
        <ToDoItem
          key={i.id}
          i={i}
          handleCompleteClick={props.handleCompleteClick}
        />
      ))}
    </div>
  );
}

export default ToDoList;
