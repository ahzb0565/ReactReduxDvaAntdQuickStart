import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  const todoList = props.todos.map((item, index) => (
    <Todo key={ index } todo={ item.text } />
  ))
  return (
    <div>
      <p>My task list</p>
      <ul>
        { todoList }
      </ul>
    </div>
  )
}

export default TodoList

/*
const todos = [
  {text: 'task 1', completed: false},
  {text: 'task 2', completed: false},
]
<TodoList todos={ todos } />
*/