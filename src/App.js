import React from 'react'
import styles from './App.module.css'
import { connect } from 'react-redux'
import { createTask } from './store/actions'
import TasksList from './components/TasksList/TasksList'
import FilterTaskPanel from './components/FilterTasksPanel/FilterTasksPanel'
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel'

class App extends React.Component {
  state = { tasks: [], filter: 'All' }

  addValues = (value) => {
    if (value) {
      this.props.createTask(value)
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
            tasks={this.props.tasks}
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

function mapStateToProps(state) {

  return {
    tasks: state.todos.tasks,
    filter: state.todos.filter
  }
}

const mapDispatch = {
  createTask
}

export default connect(mapStateToProps, mapDispatch)(App)
