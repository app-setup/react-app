import React from 'react';

function TodoItem({todo, handleComplete, handleRemove }) {
  return (
    <div className="d-flex">
      <div className="mr-auto">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="">
        <input type="checkbox" className="form-check-input" checked={todo.complete} onChange={() => handleComplete(todo.id)}/>
        <button type="button" className="btn btn-link" onClick={() =>handleRemove(todo.id)}>x</button>
      </div>
    </div>
  )
}

export default TodoItem;
