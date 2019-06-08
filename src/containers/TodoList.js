import { connect } from 'react-redux';
import { TodoList } from '../components';
import { completeTodo, removeTodo } from '../actions';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleComplete: id => dispatch(completeTodo(id)),
  handleRemove: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
