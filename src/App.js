import React from 'react'

import Navbar from "./components/Navbar"
import TodosListContainer from "./containers/TodosListContainer"

import './App.css'

//####################################################################
import { createStore } from "redux"

const SHOW_ALL = "SHOW_ALL"

const initialState = {
  todos: [
    { id: 1, text: "Hello World", isCompleted: false },
    { id: 2, text: "Buy Some Milk", isCompleted: true },
    { id: 3, text: "Fight The Ninjas", isCompleted: false },
    { id: 4, text: "Get Lots of Money", isCompleted: false },
    { id: 5, text: "Conquer The World!", isCompleted: false },
  ],
  todosFilter: SHOW_ALL
}

const appReducer = (prevState = initialState, action) => {
  switch (action.type) {
    default:
      return prevState
  }
}

const store = createStore(appReducer, initialState)
//####################################################################

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        
        {/* ADD FORM */}

        {/* FILTER RADIOS + Container */}

        {/* TODO LIST + Container */}

        <TodosListContainer store={store} />

        
        {/* {store.getState().todos[0].text}
        <br/>
        {store.getState().todos[1].text}
        <br/>
        {store.getState().todos[2].text} */}

        {/* <ul className="list-group text-white">
          {store.getState().todos.map((todo, i) =>
            <li key={i} class="list-group-item">{todo.text}</li>)}
        </ul> */}

      </div>
    </div>
  )
}

export default App
