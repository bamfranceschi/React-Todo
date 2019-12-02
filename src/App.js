import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

const toDo = [
  {
    task: "Laundry",
    id: 1,
    completed: false
  },
  {
    task: "Dishes",
    id: 2,
    completed: false
  },
  {
    task: "Replant Cactus",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    };
  }

  addToDoItem = newToDoText => {
    const newToDo = {
      task: newToDoText,
      id: Date.now(),
      completed: false
    };

    this.setState({ toDo: [...this.state.toDo, newToDo] });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Get Sh*t Done</h2>
        <ToDoList toDo={this.state.toDo} />
        <ToDoForm addToDoItem={this.addToDoItem} />
      </div>
    );
  }
}

export default App;
