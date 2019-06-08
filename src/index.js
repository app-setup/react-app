import React from 'react';
import ReactDOM from 'react-dom';
// import 'jquery';
// import 'popper.js';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { fetchTodosFromData } from './actions'
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchTodosFromData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
