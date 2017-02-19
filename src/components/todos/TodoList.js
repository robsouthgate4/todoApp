import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const mappedTodos =  props.todos.map((todo, index) => <TodoItem handleDelete={props.handleDelete} handleToggle={props.handleToggle} key={index} {...todo}></TodoItem>); 
  return (
    <div className="todo-list">
      <ul>
        <ReactCSSTransitionGroup
          key={1}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {mappedTodos}
        </ReactCSSTransitionGroup>
      </ul>
    </div>
  )

  }

// TodoList.PropTypes
