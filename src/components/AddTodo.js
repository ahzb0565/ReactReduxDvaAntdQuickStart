import React from 'react'
import { Input, Button, Icon} from 'antd'

const AddTodo = props => {
  return (
    <div>
      <Input 
        type="text"
        placeholder="Add todo"
        addonAfter={ <Icon type="plus" /> }
        onPressEnter={ (e) => {
          if (!!e.target.value.trim()){
            props.onAdd(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

export default AddTodo

/*
<AddTodo onAdd={ text => addtodo(text)} />
*/