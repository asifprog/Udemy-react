import React, { Component } from "react";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
      currentPage: 1,
      todosPerPage: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  render() {
    const { todos1, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos1.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos1.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default TodoApp;
