let nextId = 0;
export const addTodo = todo => ({
  type: 'ADD_TODO',
  id: nextId++,
  completed: false,
  ...todo
});

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})
