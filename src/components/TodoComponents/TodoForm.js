import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newToDoItem: ""
    };
  }

  handleInput = e => {
    this.setState({ newToDoItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDoItem(this.state.newToDoItem);
    this.setState({
      newToDoItem: ""
    });
  };

  onClick = e => {
    e.preventDefault();
    this.props.handleClearComplete(this.props.i);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="add ToDo"
          value={this.state.newToDoItem}
          type="text"
          name="toDo"
          onChange={this.handleInput}
        ></input>
        <button onClick={this.handleSubmit}>Add ToDo</button>
        <button onClick={this.onClick}>Clear Completed</button>
      </form>
    );
  }
}

export default ToDoForm;
