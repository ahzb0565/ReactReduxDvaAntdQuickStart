import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {text: 'task 1', completed: false},
        {text: 'task 2', completed: false},
      ]
    }
  }
  deleteTodo(index){
    this.setState({
      todos: this.state.todos
        .filter(
          item => this.state.todos.indexOf(item) != index
        )
        .map(
          item => Object.assign({}, item)
        )
    })
  }
  handleAdd(value){
    this.setState({
      todos: [...this.state.todos.map(item => Object.assign({}, item)), { text: value, completed: false}]
    })
  }
  render(){
    return (
      <div>
        <AddTodo onAdd={ value => this.handleAdd(value)}/>
        <TodoList todos={ this.state.todos } onDelete={ this.deleteTodo.bind(this) } />
      </div>
    )
  }
}

export default TodoApp