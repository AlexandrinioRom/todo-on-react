import React from 'react'
import './Task.css'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      task: this.props.value,
      completed: this.props.completed,
    }
  }

  editTask = (event) => {
    event.target.blur()
    this.props.onClickEdit(this.props.id, this.state.task)
    this.setState({ disabled: !this.state.disabled })
  }

  onChange = (event) => {
    this.setState({ task: event.target.value })
  }

  completedTask = (event) => {
    // event.target.nextElementSibling.classList.toggle('completed');
    this.props.onClickCompleted(this.props.id)
    this.setState({ completed: !this.state.completed })
  }

  deleteTask = () => {
    this.props.onClickDelete(this.props.id)
  }

  render() {
    return (
      <div className="task">
        <input type="checkbox" onChange={this.completedTask} />
        <textarea
          type="text"
          onChange={this.onChange}
          placeholder={this.props.value}
          disabled={this.state.disabled}
          className={`task-textarea ${!this.state.disabled ? 'active' : ''}`}
        />
        <div className="buttons-container">
          <button onClick={this.editTask}>edit</button>
          <button onClick={this.deleteTask}>delete</button>
        </div>
      </div>
    )
  }
}

export default Task
