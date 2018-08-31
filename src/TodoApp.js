import React from 'react'
import TodoListContainer from './containers/TodoListContainer'
import { Layout, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout;

class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {text: 'task 1', completed: false},
        {text: 'task 2', completed: true},
      ],
      visibilityFilter: 'SHOW_COMPLETED'
    }
  }
  deleteTodo(index){
    this.setState({
      todos: this.state.todos
        .filter(
          item => this.state.todos.indexOf(item) !== index
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
      <Layout className="layout">
        <Header>
          <div className="logo" > Hello React </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Todo App</Breadcrumb.Item>
          </Breadcrumb>
          <TodoListContainer />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default TodoApp