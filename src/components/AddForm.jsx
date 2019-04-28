import React, { Component } from "react"
import { ADD_TODO } from "../consts/actionTypes"

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    const { text } = this.state
    return (
      <form className="my-3" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-7">
            <input type="text" name="text" value={text} onChange={this.handleInputChange} className="form-control mr-3" placeholder="Todo Text"/>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    )
  }

  createNewId(store) {
    const todos = store.getState().todos    
    let biggestId = todos[0].id
    todos.forEach(todo => biggestId = (todo.id > biggestId) ? todo.id : biggestId)
    return biggestId + 1
  }

  createNewTodoAction(store, text) {
    const newTodo = {
      id: this.createNewId(store),
      text: text,
      isCompleted: false
    }
    return {
      type: ADD_TODO,
      todo: newTodo
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const action = this.createNewTodoAction(this.props.store, this.state.text)
    this.props.store.dispatch(action)
  }
  
  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
}

export default AddForm