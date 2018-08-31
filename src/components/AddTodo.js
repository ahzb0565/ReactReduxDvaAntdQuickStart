import React from 'react'
import { Input, Icon} from 'antd'
import PropTypes from 'prop-types'

const AddTodo = ({ onAdd }) => {
  return (
    <div>
      <Input 
        type="text"
        placeholder="Add todo"
        addonAfter={ <Icon type="plus" /> }
        onPressEnter={ (e) => {
          if (!!e.target.value.trim()){
            onAdd(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default AddTodo

/*
<AddTodo onAdd={ text => addtodo(text)} />
*/