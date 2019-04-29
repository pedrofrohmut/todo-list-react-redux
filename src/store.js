import { createStore } from "redux"

import { SHOW_ALL } from "./consts/strings"
import { CHANGE_FILTER, ADD_TODO, TOGGLE_TODO_AS_COMPLETED } from "./consts/actionTypes"

const initialState = {
  todos: [
    { id: 14, text: "Dummy the Villa", isCompleted: false },
    { id: 4, text: "Get Lots of Money", isCompleted: true },
    { id: 5, text: "Conquer The World!", isCompleted: false },
    { id: 2, text: "Buy Some Milk", isCompleted: true },
    { id: 23, text: "Orc the way out", isCompleted: false },
    { id: 1, text: "Hello World", isCompleted: false },
    { id: 3, text: "Fight The Ninjas", isCompleted: false }
  ],
  todosFilter: SHOW_ALL
}

const appReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      const newFilter = {
        todosFilter: action.todosFilter
      }
      return { 
        ...prevState, 
        ...newFilter 
      }

    case ADD_TODO:
      const newTodo = action.todo
      return {
        ...prevState, 
        todos: [ ...prevState.todos, newTodo ]
      }

    case TOGGLE_TODO_AS_COMPLETED:
      const todos = [ ...prevState.todos ].map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        } else {
          return todo
        }
      })
      return {
        ...prevState,
        todos: todos
      }

    default:
      return prevState
  }
}

const store = createStore(appReducer, initialState)

export default store