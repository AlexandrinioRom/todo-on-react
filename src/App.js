import React from 'react';
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel';
import TasksList from './components/TasksList/TasksList';
import FilterTaskPanel from './components/FilterTasksPanel/FilterTasksPanel';
import './App.css';

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
            value: value
          }]
      });
    }
  }

  checkTasks = (tasksArr) => {
    this.setState({ tasks: tasksArr })
  }

  filterState = (FilterTaskPanelState) => {
    this.setState({ filter: FilterTaskPanelState });
  }

  render() {
    return (

      <div className='app'>
        <CreateTasksPanel
          onClickCreate={this.addValues}
        />
        <TasksList
          tasks={this.state.tasks}
          onClickDelete={this.checkTasks}
          checkTasks={this.checkTasks}
          filterState={this.state.filter}
        />
        <FilterTaskPanel
          filterState={this.filterState}
        />
      </div>
    );
  }
}

export default App