import React from 'react'

const Todo = props => (
  <li>{ props.todo }</li>
)

export default Todo

/*
const tasks = ['task 1', 'task 2']
<ul>
  {tasks.map((item, index) => (
    <Todo key={ index } todo={ task } />
  ))}
</ul>
*/