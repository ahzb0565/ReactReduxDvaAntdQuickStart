import React from 'react'
import TodoList from './components/TodoList'

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
  render(){
    return (
      <div>
        <TodoList todos={ this.state.todos } />
      </div>
    )
  }
}

export default TodoApp