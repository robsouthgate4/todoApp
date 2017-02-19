import React, { PropTypes } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => (
    <div className="todo-list">
      <ul>
        { props.todos.map((todo, index) => <TodoItem handleDelete={props.handleDelete} handleToggle={props.handleToggle} key={index} {...todo}></TodoItem>) }
      </ul>
    </div>)

// TodoList.PropTypes
