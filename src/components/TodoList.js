import React from 'react'
import { List, Button, Layout, Row, Col } from 'antd'
import PropTypes from 'prop-types'
import AddTodo from './AddTodo'
const { Content } = Layout

const TodoList = ({ todos, onAdd, onDelete}) => {
  const Header = (
    <Row type="flex" justify="space-between" align="middle">
      <Col span={6}>
        My Todo List
      </Col>
      <Col span={18}>
        <AddTodo onAdd={ value => onAdd(value)} />
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
              <List.Item actions={[<Button size="small" type="danger" onClick={() => onDelete(item.id)}>Delete</Button>]}>
                <List.Item.Meta description={`${item.id + 1}. ${item.text}`} />
                <div>{ item.completed? '已完成':'未完成'}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Content>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList

/*
const todos = [
  {text: 'task 1', completed: false},
  {text: 'task 2', completed: false},
]
<TodoList todos={ todos } onDelete={ this.deleteItem.bind(this) }/>
*/