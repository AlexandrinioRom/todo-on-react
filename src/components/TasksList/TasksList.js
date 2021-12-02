import React from 'react'
import Task from '../Task/Task'
import { connect } from 'react-redux'
import style from './TaskList.module.css'
import { todoSelectors } from '../../store/selectors'
import { deleteTask, editTask, completedTask } from '../../store/actions'

class TasksList extends React.Component {

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

    return (

      <div className={style.main}>

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

function mapStateToProps(state) {
  return {
    tasks: todoSelectors.filter(state)
  }
}

const mapDispatch = {
  completedTask,
  deleteTask,
  editTask,
}
export default connect(mapStateToProps, mapDispatch)(TasksList)
