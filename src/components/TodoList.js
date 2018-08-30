import React from 'react'
import { List, Button, Layout, Row, Col, Icon } from 'antd'
import AddTodo from './AddTodo'
const { Content } = Layout

const TodoList = props => {
  const todos = props.todos.map((item, index) => ({ index, text: item.text, completed: item.completed }))
  const Header = (
    <Row type="flex" justify="space-between" align="middle">
      <Col span={6}>
        My Todo List
      </Col>
      <Col span={18}>
        <AddTodo onAdd={ value => props.onAdd(value)} />
      </Col>
    </Row>
  )
  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      <Row>
        <Col span={8} offset={8}>
          <List
            size="small"
            header={ Header }
            bordered
            dataSource={ todos }
            renderItem={item => (
              <List.Item actions={[<Button size="small" type="danger" onClick={() => props.onDelete(item.index)}>Delete</Button>]}>
                <List.Item.Meta description={`${item.index + 1}. ${item.text}`} />
                <div>{ item.completed? '已完成':'未完成'}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default TodoList

/*
const todos = [
  {text: 'task 1', completed: false},
  {text: 'task 2', completed: false},
]
<TodoList todos={ todos } onDelete={ this.deleteItem.bind(this) }/>
*/