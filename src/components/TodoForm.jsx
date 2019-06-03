import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle ] = useState("");
  const [description, setDecription ] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTodo({ title, description });
    setTitle("");
    setDecription("");
  }
  return (
    <form className="w-25" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="todoTitle"
          placeholder="Title"
          value={title}
          onChange= {e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
      <textarea
          type="text"
          className="form-control"
          id="todoDescription"
          placeholder="Description"
          value={description}
          onChange={e=> setDecription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      )
      }

export default TodoForm;
