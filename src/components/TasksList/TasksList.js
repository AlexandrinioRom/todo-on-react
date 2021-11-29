import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'

class TasksList extends React.Component {

  filterTasks = (filter) => {

    switch (filter) {
      case 'All':
        return this.props.tasks
      case 'Active':
        return this.props.tasks.filter(task => task.completed === false)
      case 'Completed':
        return this.props.tasks.filter(task => task.completed !== false)
      default:
        return []
    }
  }

  onClickEdit = (id, value) => {

    const arr = this.props.tasks.map((task) => {
      if (task.id !== id) {
        return task
      }
      return {
        ...task,
        value: value
      }
    })
    this.props.updateTasks(arr)
  }

  onClickCompleted = (id) => {

    const arr = this.props.tasks.map((task) => {
      if (task.id !== id) {
        return task
      }
      return {
        ...task,
        completed: !task.completed
      }
    })
    this.props.updateTasks(arr)
  }

  onClickDelete = (id) => {
    const arr = this.props.tasks.filter((task) => task.id !== id)
    this.props.updateTasks(arr)
  }

  render() {

    const arr = this.filterTasks(this.props.filterState)

    return (

      <div className="tasksList">

        {arr.length ? (
          arr.map((task) => {
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
