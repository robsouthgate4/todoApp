import React, { PropTypes } from 'react'

export const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input value={props.currentTodo} onChange={props.handleInputChange}></input>
    </form>)

TodoForm.PropTypes = {
  currentTodo: PropTypes.string
}
