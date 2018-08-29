import React from 'react'
import DeleteTodo from './DeleteTodo'

const Todo = props => (
  <li>{ props.todo } <DeleteTodo onDelete={ () => props.onDelete() }/></li>
)

export default Todo

/*
const tasks = ['task 1', 'task 2']
<ul>
  {tasks.map((item, index) => (
    <Todo key={ index } todo={ task } onDelete={ this.deleteItem }/>
  ))}
</ul>
*/