import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'

const AddTodoContainer = connect(
  null,
  dispatch => ({ onAdd: text => dispatch(addTodo(text)) })
)(AddTodo)

export default AddTodoContainer