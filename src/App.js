import React from 'react'
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel'
import TasksList from './components/TasksList/TasksList'
import FilterTaskPanel from './components/FilterTasksPanel/FilterTasksPanel'
import styles from './App.module.css'

class App extends React.Component {
  state = { tasks: [], filter: 'All' }

  addValues = (value) => {
    if (value) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            completed: false,
            id: new Date().getTime(),
            value: value,
          },
        ],
      })
    }
  }

  updateTasks = (tasksArr) => {
    this.setState({ tasks: tasksArr })
  }

  filterState = (filterTaskPanelState) => {
    this.setState({ filter: filterTaskPanelState })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <CreateTasksPanel onClickCreate={this.addValues} />
          <TasksList
            tasks={this.state.tasks}
            updateTasks={this.updateTasks}
            filterState={this.state.filter}
          />
          <FilterTaskPanel
            tasks={this.state.tasks}
            filterState={this.filterState}
          />
        </div>
      </div>

    )
  }
}

export default App
