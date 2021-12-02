import React from 'react'
import style from './FilterTasksPanel.module.css'

class FilterTaskPanel extends React.Component {
  onChecked = (event) => {
    this.props.filterState(event.target.value)
  }

  tasksCount = () => {
    const completedTasks = this.props.tasks.filter((task) => task.completed)
    if (this.props.tasks.length) {
      return `${completedTasks.length}/${this.props.tasks.length}`
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
        <span>{this.tasksCount()}</span>
      </div>
    )
  }
}

export default FilterTaskPanel
