import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return props.todos.map((todo, index) => {
        return <TodoItem key={index} title={todo.title} description={todo.description} />
    })
}

export default TodoList;
