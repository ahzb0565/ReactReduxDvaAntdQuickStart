import { connect } from 'react-redux'
import { VisibilityFilters, addTodo, deleteTodo} from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter){
  switch(filter){
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(item => item.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(item => !item.completed)
    case VisibilityFilters.SHOW_ALL:
      return todos
    default:
      return []
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  } 
}

const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch(addTodo(text)),
  onDelete: index => dispatch(deleteTodo(index))
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList