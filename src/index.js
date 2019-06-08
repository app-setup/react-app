import React from 'react';
import ReactDOM from 'react-dom';
// import 'jquery';
// import 'popper.js';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
