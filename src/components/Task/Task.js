import React from 'react'
import './Task.css'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      task: this.props.value,
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

  completedTask = () => {
    this.props.onClickCompleted(this.props.id)
  }

  deleteTask = () => {
    this.props.onClickDelete(this.props.id)
  }

  render() {
    const titleClassName = `task-title ${this.props.completed && 'completed'}`
    const checkbox = `input-checkbox ${this.props.completed && 'checked'}`
    return (
      <div className="task">
        <input
          type="checkbox"
          onChange={this.completedTask}
          className={checkbox}
        />
        {this.state.disabled ? (
          <p className={titleClassName}>{this.props.value}</p>
        ) : (
          <input
            type="text"
            onChange={this.onChange}
            placeholder={this.props.value}
            className="task-textarea active"
          />
        )}
        <div className="buttons-container">
          <button
            onClick={this.editTask}
            className={`button-edit ${!this.state.disabled && 'btn-active'}`}
          >
            edit
          </button>
          <button onClick={this.deleteTask} className="button-edit">
            delete
          </button>
        </div>
      </div>
    )
  }
}

export default Task
