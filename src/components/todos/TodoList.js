import React, { PropTypes } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => (
    <div className="todo-list">
      <ul>
        { props.todos.map((todo, index) => <TodoItem key={index} {...todo}></TodoItem>) }
      </ul>
    </div>)

// TodoList.PropTypes
