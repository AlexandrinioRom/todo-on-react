import React from 'react'
import Task from '../Task/Task'
import { connect } from 'react-redux'
import style from './TaskList.module.css'
import { todoSelectors } from '../../store/selectors'
import { deleteTask, editTask, completedTask } from '../../store/actions'


class TasksList extends React.Component {

  filterTasks = (filter) => {

    switch (filter) {
      case 'All':
        return this.props.tasks
      case 'Active':
        return this.props.activeTasks
      case 'Completed':
        return this.props.completedTasks
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

function mapStateToProps(state) {
  return {
    activeTasks: todoSelectors.active(state),
    completedTasks: todoSelectors.completed(state)
  }
}

const mapDispatch = {
  completedTask,
  deleteTask,
  editTask,
}
export default connect(mapStateToProps, mapDispatch)(TasksList)
