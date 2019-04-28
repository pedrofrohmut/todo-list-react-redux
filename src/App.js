import React from 'react'

import store from "./store"

import Navbar from "./components/Navbar"
import AddForm from "./components/AddForm"
import FilterContainer from "./containers/FilterContainer"
import TodosListContainer from "./containers/TodosListContainer"

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AddForm store={store} />
        <FilterContainer store={store} />       
        <TodosListContainer store={store} />
      </div>
    </div>
  )
}

export default App
