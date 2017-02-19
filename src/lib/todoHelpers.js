
export const findById = (id, todoArray) => {
  let todoItem;
  todoArray.forEach((todo, index) => {
    if (todo.id === id) {
      todoItem = todo;
    }
  })
  return todoItem;
}

export const addNewTodo = (todo, todoArray) =>  [...todoArray, todo];

export const generateId = () => Math.floor(Math.random() * 100000);

export const toggleTodo = (todo) => {
  let newTodo = todo;
  newTodo.completed = !newTodo.completed;
  return newTodo;
}

export const updateTodo = (todoArray, updated) => {
  const updatedIndex = todoArray.findIndex(item => item.id === updated.id);
  return [
    ...todoArray.slice(0, updatedIndex),
    updated,
    ...todoArray.slice(updatedIndex + 1)
  ]
}

export const deleteTodo = (todoArray, todo) => {
  const updatedTodos = todoArray.filter((item, index) => item.id != todo.id);
  return updatedTodos;
}

export const filterTodos = (todoArray, route) => {
  switch (route) {
    case '/complete':
      return todoArray.filter( todo => todo.completed);
    case '/active':
      return todoArray.filter( todo => !todo.completed);
    default:
      return todoArray;
  }
}
