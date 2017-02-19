import React from 'react';
import ReactDOM from 'react-dom';
import { findById, addNewTodo, updateTodo, deleteTodo, filterTodos} from './todoHelpers';

test('findbyid() should find todo with supplied id', () => {
  const todoArray = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];
  const expected = { id: 2, name: "Learn React", completed: false };
  const result = findById(2, todoArray);
  expect(result).toEqual(expected);
});

test('addNewTodo() should add a new todo to todoList', () => {

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

test('updateTodo() should update todo property without mutation', () => {

  const before = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const todo = { id: 1, name: "Learn jsx", completed: false };

  const expected = [
    { id: 1, name: "Learn jsx", completed: false },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const result = updateTodo(before, todo);

  expect(result).toEqual(expected);

});

test('deleteTodo() should remove todo from todos', () => {
  const todos = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];
  const todo = { id: 1, name: "Learn jsx", completed: true };

  const expected = [
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const result = deleteTodo(todos, todo);

  expect(result).toEqual(expected);
});

test('deleteTodo() should not mutate existing todos', () => {

  const todos = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const todo = { id: 1, name: "Learn jsx", completed: true };

  const expected = [
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const result = deleteTodo(todos, todo);

  expect(result).not.toBe(expected);
});

test('Filter todos should return todos related to the / route', () => {
  const todos = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const expected = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const result = filterTodos(todos, '/');

  expect(result).toEqual(expected);

});

test('Filter todos should return todos related to the completed route', () => {

  const todos = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const expected = [
    { id: 1, name: "Learn jsx", completed: true }
  ];

  const result = filterTodos(todos, '/complete');

  expect(result).toEqual(expected);

});

test('Filter todos should return todos related to the active route', () => {

  const todos = [
    { id: 1, name: "Learn jsx", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const expected = [
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Angular", completed: false }
  ];

  const result = filterTodos(todos, '/active');

  expect(result).toEqual(expected)

});
