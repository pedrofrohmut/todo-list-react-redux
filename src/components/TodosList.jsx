import React from "react"

const TodosList = (props) => {
  const { todos, onCheck } = props

  const getLiCompletedClass = isCompleted => (
    isCompleted 
      ? "list-group-item is-todo-completed"
      : "list-group-item"
  )

  return (
    <ul className="list-group text-white">
      {
        todos.map((todo, i) => 
          <li className={getLiCompletedClass(todo.isCompleted)} key={i}> 
            <label>
              <input type="checkbox" onChange={() => onCheck(todo.id)} checked={todo.isCompleted} />
              <span className="mx-3">{todo.text}</span> 
            </label>
          </li>        
        )    
      }
    </ul>
  )
}

export default TodosList