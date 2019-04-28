import React from "react" // TEMP: REMOVE ME AFTER TEST
import TodosList from "../components/TodosList"

const TodosListContainer = props => {  
  const { store } = props  
  return (
    <TodosList store={store} />
  )
}

export default TodosListContainer