import React, { PropTypes } from 'react'

export const TodoItem = (props) =>  (
      <li>
        <input
          type="checkbox"
          defaultChecked={props.completed} /> {props.name}
      </li>)
