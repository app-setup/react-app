import { connect } from 'react-redux';
import { TodoForm } from '../components';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoForm);
