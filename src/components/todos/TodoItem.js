import React, { PropTypes } from 'react'

export const TodoItem = (props) =>  (
      <li>
        <span onClick={() => props.handleDelete(props.id)} className="delete">x</span>
        <input
          onChange={() => props.handleToggle(props.id)}
          type="checkbox"
          checked={props.completed} /> {props.name}
      </li>)
