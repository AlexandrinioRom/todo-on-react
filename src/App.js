import React from 'react';
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel';
import TasksList from './components/TasksList/TasksList';
import FilterTaskPanel from './components/FilterTasksPanel/FilterTasksPanel';
import './App.css';

class App extends React.Component {

  state = {
    tasks: [],
    filter: []
  }

  addValues = (value) => {
    if (value) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            completed: false,
            id: new Date().getTime(),
            value: value
          }], filter: [
            ...this.state.tasks,
            {
              completed: false,
              id: new Date().getTime(),
              value: value
            }
          ]
      });
    }
  }

  filterTasks = (tasksArr) => {
    this.setState({ filter: tasksArr })
  }

  render() {

    const onClickDelete = (id) => {
      const arr = this.state.tasks.filter((task) => task.id !== id)
      this.setState({ tasks: arr })
    }

    return (

      <div className='app'>
        <CreateTasksPanel
          onClickCreate={this.addValues}
        />
        <TasksList
          tasks={this.state.filter}
          onClickDelete={onClickDelete}
        />
        <FilterTaskPanel
          tasks={this.state.tasks}
          filter={this.filterTasks}
        />
      </div>
    );
  }
}

export default App