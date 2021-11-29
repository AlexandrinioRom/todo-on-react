import React from 'react'
import style from './FilterTasksPanel.module.css'

class FilterTaskPanel extends React.Component {
  onChecked = (event) => {
    this.props.filterState(event.target.value)
  }

  tasksCount = (tasksArr) => {
    const completedTasks = tasksArr.filter((task) => task.completed === true)
    if (tasksArr.length) {
      return `${completedTasks.length}/${tasksArr.length}`
    }
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.input_container}>
          <label className={style.label} htmlFor="All">
            All
          </label>
          <input
            value="All"
            type="radio"
            name="filter"
            className={style.input}
            defaultChecked
            onChange={this.onChecked}
          />

          <label className={style.label} htmlFor="Active">
            Active
          </label>
          <input
            value="Active"
            type="radio"
            name="filter"
            className={style.input}
            onChange={this.onChecked}
          />

          <label className={style.label} htmlFor="Completed">
            Completed
          </label>
          <input
            value="Completed"
            type="radio"
            name="filter"
            className={style.input}
            onChange={this.onChecked}
          />
        </div>
        <span>{this.tasksCount(this.props.tasks)}</span>
      </div>
    )
  }
}

export default FilterTaskPanel
