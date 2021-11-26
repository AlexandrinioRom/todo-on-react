import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'

class TasksList extends React.Component {

  filterTasks = (filter) => {
    let arrFilter = [];
    switch (filter) {
      case 'All':
        arrFilter = this.props.tasks
        break
      case 'Active':
        arrFilter = this.props.tasks.filter(task => task.completed === false)
        break
      case 'Completed':
        arrFilter = this.props.tasks.filter(task => task.completed !== false)
        break
      // no default
    }
    return arrFilter;
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
    this.props.checkTasks(arr)
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
    this.props.checkTasks(arr)
  }

  onClickDelete = (id) => {
    const arr = this.props.tasks.filter((task) => task.id !== id)
    this.props.checkTasks(arr)
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
