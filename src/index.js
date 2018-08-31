import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import TodoApp from './TodoApp'
import 'antd/dist/antd.css';

import { createStore } from 'redux'
import { todoAppReducers } from './reducers'


let store = createStore(todoAppReducers)


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
