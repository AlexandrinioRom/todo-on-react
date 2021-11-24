import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

class TasksList extends React.Component {

    renderTask(value) {
        if (value) {
            return <Task value={value}/>;
        }
        return <p>Task list is emty</p>  
    }
    render() {
        
        return (
            
            <div className='tasksList'>
                {this.renderTask(this.props.task)}
            </div>
        );
    }
}

export default TasksList;