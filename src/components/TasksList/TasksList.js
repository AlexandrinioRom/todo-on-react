import React from 'react'
import Task from '../Task/Task'
import { connect } from 'react-redux'
import style from './TaskList.module.css'
import { deleteTask, editTask, completedTask } from '../../store/actions'

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
    this.props.editTask(id, value)
  }

  onClickCompleted = (id) => {
    this.props.completedTask(id)
  }

  onClickDelete = (id) => {
    this.props.deleteTask(id)
  }

  render() {

    const arr = this.filterTasks(this.props.filterState)

    return (

      <div className={style.main}>

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

const mapDispatch = {
  completedTask,
  deleteTask,
  editTask,
}
export default connect(null, mapDispatch)(TasksList)
