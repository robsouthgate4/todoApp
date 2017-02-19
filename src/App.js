import React, { Component } from 'react';
import {TodoForm, TodoList, Footer} from './components/todos';
import logo from './logo.svg';
import './App.css';
import {generateId, addNewTodo, findById, toggleTodo, updateTodo, deleteTodo, filterTodos} from './lib/todoHelpers.js';
import { loadTodos, createTodo, saveTodo, removeTodo } from './lib/todoService.js';

class App extends Component {
  state = {
    todos: [

    ],
    currentTodo: '',
    errorMessage: '',
    message: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount = () => {
    loadTodos()
      .then( todos => this.setState({todos}) )
  }

  handleInputChange = (evt) => {
    this.setState({ currentTodo: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = { id: newId,  name: this.state.currentTodo, completed: false };
    const updatedTodos = addNewTodo(newTodo, this.state.todos);

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });

    createTodo(newTodo)
      .then(this.showTempMessage('New todo added'));
  }

  showTempMessage = (message) => {
    this.setState({message: message});
    setTimeout(() => { this.setState({message: ''}) }, 2500)
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Can not submit an empty value'
    });
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({
      todos: updatedTodos
    });
    saveTodo(toggled)
      .then(this.showTempMessage('todo updated'))
  }

  handleDelete = (id) => {
    const todo = findById(id, this.state.todos);
    const updatedTodos = deleteTodo(this.state.todos, todo);
    this.setState({
      todos: updatedTodos
    });
    removeTodo(id)
      .then(this.showTempMessage('Removed todo'));
  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="Todo-App">
          { this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
          { this.state.message && <span className="message">{this.state.message}</span> }
          <TodoForm
            handleSubmit={submitHandler}
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo} />
          <TodoList
            handleDelete={this.handleDelete}
            handleToggle={ this.handleToggle }
            todos={displayTodos} />
          <Footer> </Footer>
        </div>
      </div>
    );
  }
}

export default App;
