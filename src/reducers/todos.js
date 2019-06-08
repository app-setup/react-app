const todos = (state = [], { type, ...payload }) => {
  switch (type) {
    case 'FETCH_TODOS':
      state = payload.todos;
      return [...state];
    case 'ADD_TODO':
      return [
        ...state,
        {
          ...payload
        }
      ]
      case 'COMPLETE_TODO':
        const newState = state.map(todo => todo.id === payload.id ? {...todo, completed: !todo.completed }: todo)
        return [...newState];
      case 'REMOVE_TODO':
        const todoIndex = state.findIndex(todo => todo.id === payload.id);
        if(todoIndex === -1) return state;
        state.splice(todoIndex, 1);
        return [...state];
    default:
      return state;
  }
}

export default todos
