import React from 'react';
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel';
import TasksList from './components/TasksList/TasksList';
import './App.css';

class App extends React.Component {

  state = { tasks: [] }

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
          tasks={this.state.tasks}
          onClickDelete={onClickDelete}
        />
      </div>
    );
  }
}

export default App