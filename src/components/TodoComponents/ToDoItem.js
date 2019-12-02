import React from "react";

function ToDoItem(props) {
  const onClick = e => {
    e.stopPropagation();
    props.handleCompleteClick(props.i);
  };
  const classNames = ["toDoItem"];

  if (props.i.completed) {
    classNames.push("completed");
  }

  return (
    <div>
      <p className={classNames.join(" ")} onClick={onClick}>
        {props.i.task}
      </p>
    </div>
  );
}

export default ToDoItem;
