import React from 'react';

const DeleteTodo = props => {
  return (
    <button onClick={ () => props.onDelete()} >Delete </button>
  )
}

export default DeleteTodo