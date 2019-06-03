import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, handleComplete, handleRemove}) {
  return todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} handleComplete={handleComplete} handleRemove={handleRemove}/>
    })
}

export default TodoList;
