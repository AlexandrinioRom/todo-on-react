import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'

class TasksList extends React.Component {

  onClickEdit = (id, value) => {
    this.props.tasks.map((task) => {
      return (task.id === id) ? task.value = value : false
    })
    this.setState(this.props.tasks)
  }

  onClickCompleted = (id) => {
    this.props.tasks.map((task) => {
      return (task.id === id) ? task.completed = !task.completed : false
    })
    this.setState(this.props.tasks)
  }

  onClickDelete = (id) => {
    this.props.onClickDelete(id)
  }

  render() {
    return (
      <div className="tasksList">
        {this.props.tasks.length ? (
          this.props.tasks.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                value={task.value}
                completed={task.completed}
                onClickEdit={this.onClickEdit}
                onClickDelete={this.onClickDelete}
                onClickCompleted={this.onClickCompleted}
              />
            )
          })
        ) : (
          <p>This list is empty</p>
        )}
      </div>
    )
  }
}

export default TasksList
