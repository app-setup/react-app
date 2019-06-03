import React from 'react';
import './App.css';
import { Home, Todo } from './pages'
import { IHeader } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    
    return (
      <Router>
      <div className = "container" >
        <IHeader />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/todos" component={Todo} />
      </div>
    </Router>
      
    );
}


function About() {
  return <h2>About</h2>;
}


export default App;
