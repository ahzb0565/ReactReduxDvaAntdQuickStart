import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from '../actions'

let todoID = 0

function todoReducer(state = [], action){
  switch (action.type){
    case ADD_TODO:
      return [...state, {id: todoID++, text: action.text, completed: false}]
    case TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.index){
          return Object.assign({}, item, {completed: !item.completed})
        }
        return item
      })
    case DELETE_TODO:
      return state.filter(item => item.id !== action.index)
    default:
      return state
  }
}

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action){
  if (action.type === SET_VISIBILITY_FILTER){
    return action.filter
  }
  return state
}

export const todoAppReducers = (state={}, action) => (
  { 
    todos: todoReducer(state.todos, action), 
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)}
)