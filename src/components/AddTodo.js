import React from 'react'

class AddTodo extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: ''}
  }
  handleChange(e){
    if(!!e.target.value.trim()){
      this.setState({value: e.target.value})
    }
  }
  handleClick(){
    this.props.onAdd(this.state.value)
    this.setState({value: ''})
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={ e => this.handleChange(e) } />
        <button onClick={ this.handleClick.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddTodo

/*
<AddTodo onAdd={ text => addtodo(text)} />
*/