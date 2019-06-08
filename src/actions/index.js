import axios from 'axios';

export const fetchTodosFromData = () => {
  return (dispatch) => {
    return axios.get("/data/todos.json")
                .then(response => {
                  dispatch(fetchTodos(response.data));
                })
                .catch(error => {
                  throw(error);
                })
  }
}

export const fetchTodos = todos => ({
  type: 'FETCH_TODOS',
  todos
})

let nextId = 7;
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
