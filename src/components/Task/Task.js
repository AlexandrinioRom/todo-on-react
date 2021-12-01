import React from 'react'
import style from './Task.module.css'

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
    if (this.state.disabled !== true) {
      this.props.onClickEdit(this.props.id, this.state.task)
    }
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
    const titleClassName = `${style.title} ${this.props.completed && `${style.completed}`}`
    const checkbox = `${style.checkbox} ${this.props.completed && `${style.checked}`}`
    const button_edit = `${style.button_edit} ${!this.state.disabled && `${style.button_active}`}`
    return (
      <div className={style.task}>
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
            className={style.input}
          />
        )}
        <div className={style.button_container}>
          <button
            onClick={this.editTask}
            className={button_edit}
          >
            edit
          </button>
          <button onClick={this.deleteTask} className={style.button_delete}>
            delete
          </button>
        </div>
      </div>
    )
  }
}

export default Task
