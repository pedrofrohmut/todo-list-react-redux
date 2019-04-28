import React from "react"

const TodosList = (props) => {
  const { store } = props
  return (
    <ul className="list-group text-white">
      {store.getState().todos.map((todo, i) => 
        <li className="list-group-item" key={i}> { todo.text } </li>)}
    </ul>
  )
}

export default TodosList