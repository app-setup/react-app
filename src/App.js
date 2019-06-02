import React, { useState } from 'react';
import './App.css';
import { ICarousel, TodoList } from './components/';

function App() {
    const [ todos ] = useState([{
        title: "Book",
        description: "This is a book"
      },
      {
        title: "Apple",
        description: "This is an apple"
      },
      {
        title: "Orange",
        description: "This is an orange"
      }
    ])

    return (
      <div className = "App" >
        <h1> App </h1>
        <ICarousel />
        <TodoList todos={todos} />
      </div>
    );
}

export default App;
