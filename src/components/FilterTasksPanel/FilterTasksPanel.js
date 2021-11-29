import React from 'react'
import './FilterTasksPanel.css'

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
      <div className="FilterTaskPanel">
        <div className="filtertaskpanel-items">
          <label htmlFor="All">All</label>
          <input
            value="All"
            type="radio"
            name="filter"
            className="input"
            defaultChecked
            onChange={this.onChecked}
          />

          <label htmlFor="Active">Active</label>
          <input
            value="Active"
            type="radio"
            name="filter"
            className="input"
            onChange={this.onChecked}
          />

          <label htmlFor="Completed">Completed</label>
          <input
            value="Completed"
            type="radio"
            name="filter"
            className="input"
            onChange={this.onChecked}
          />
        </div>
        <span className="tasks-count">{this.tasksCount(this.props.tasks)}</span>
      </div>
    )
  }
}

export default FilterTaskPanel
