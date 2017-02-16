import React, { Component } from 'react';
import {TodoForm, TodoList} from './components/todos'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn jsx", completed: true },
      { id: 2, name: "Learn React", completed: false },
      { id: 3, name: "Learn Angular", completed: false }
    ],
    currentTodo: ''
  }

  handleInputChange = (evt) => {
    this.setState({ currentTodo: evt.target.value });
  }

  handleSubmit = (evt) => {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
