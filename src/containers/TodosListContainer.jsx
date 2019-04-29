import React, { Component } from "react"
import TodosList from "../components/TodosList"

import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../consts/strings"
import { TOGGLE_TODO_AS_COMPLETED } from "../consts/actionTypes"

class TodosListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredTodos: []
    }
    this.updateFilteredTodos = this.updateFilteredTodos.bind(this)
    this.handleToggleTodoAsCompleted = this.handleToggleTodoAsCompleted.bind(this)
    this.props.store.subscribe(this.updateFilteredTodos)
  }

  render() {
    return <TodosList todos={this.state.filteredTodos} onCheck={this.handleToggleTodoAsCompleted} />
  }

  componentDidMount() {
    this.updateFilteredTodos()
  }

  updateFilteredTodos() {
    const { todos, todosFilter } = this.props.store.getState()
    this.setState({
      filteredTodos: this.getFilteredTodos(todos, todosFilter)
    })
  }

  getFilteredTodos(todos, todosFilter) {
    switch (todosFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.isCompleted)
      case SHOW_INCOMPLETE:
        return todos.filter(todo => !todo.isCompleted)
      default:
        return todos
    }
  }

  handleToggleTodoAsCompleted(todoId) {
    const toggleTodoAsCompletedAction = {
      type: TOGGLE_TODO_AS_COMPLETED,
      id: todoId
    }
    this.props.store.dispatch(toggleTodoAsCompletedAction)
  }
}

export default TodosListContainer