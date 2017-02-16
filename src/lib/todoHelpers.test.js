import React from 'react';
import ReactDOM from 'react-dom';
import { findById, addNewTodo, findById } from './todoHelpers';

test('shoud find todo with supplied id', () => {
  
});

test('should add a new todo to todoList', () => {

  const before = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const newTodo = { id: 4, name: "Learn JS", completed: false };

  const expected = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false },
    { id: 4, name: "Learn JS", completed: false }
  ];

  const result = addNewTodo(newTodo, before);
  expect(result).toEqual(expected);

});
