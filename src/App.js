import React from 'react';
import CreateTasksPanel from './components/CreateTasksPanel/CreateTasksPanel';
import TasksList from './components/TasksList/TasksList';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.someFunction = this.someFunction.bind(this);
        this.state = {value:''};
    }
    
    someFunction(value) {
        this.setState({value: value});
    }
    
    render() {
        
        return (

            <div className='app'>
                <CreateTasksPanel
                    onClickCreate={this.someFunction}
                />
                <TasksList
                    task={this.state.value}
                />
            </div>
        );
    }
}

export default App