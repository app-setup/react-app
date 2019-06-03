import React, { useState } from 'react';
import './App.css';
import { IHeader, TodoList, TodoForm } from './components/';

function App() {
    const [ todos, setTodos ] = useState([
      {
        id: 1,
        title: "Book",
        description: "This is a book",
        complete: false
      },
      {
        id: 2,
        title: "Apple",
        description: "This is an apple",
        complete: true
      },
      {
        id: 3,
        title: "Orange",
        description: "This is an orange",
        complete: false
      }
    ])

    const addTodo = todo => {
      const newTodos = [...todos, {complete: false, ...todo}];
      setTodos(newTodos);
    }
    const handleComplete = id => {
      const updateTodos = todos.map(todo => {
        if(todo.id === id) todo.complete = !todo.complete;
        return todo;
      })
      setTodos(updateTodos);
    }

    const handleRemove = id => {
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === id);
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
    return (
      <div className = "container" >
        <IHeader />
        <TodoList todos={todos} handleComplete={handleComplete} handleRemove={handleRemove} />
        <TodoForm addTodo={addTodo} />
      </div>
    );
}

export default App;
