import React from 'react'
import styles from './App.module.css'
import { connect } from 'react-redux'
import TasksList from './components/TasksList/TasksList'
import { createTask, filteredTasks } from './store/actions'
import FilterTaskPanel from './components/FilterTasksPanel/FilterTasksPanel'
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel'


class App extends React.Component {
  state = { tasks: [], filter: '' }

  addValues = (value) => {
    if (value) {
      this.props.createTask(value)
    }
  }

  filterState = (filterTaskPanelState) => {
    this.props.filteredTasks(filterTaskPanelState)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <CreateTasksPanel onClickCreate={this.addValues} />
          <TasksList />
          <FilterTaskPanel
            tasks={this.props.tasks}
            filterState={this.filterState}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.todos.filter,
    tasks: state.todos.tasks,
  }
}

const mapDispatch = {
  filteredTasks,
  createTask,
}

export default connect(mapStateToProps, mapDispatch)(App)
