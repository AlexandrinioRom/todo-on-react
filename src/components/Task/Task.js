import React from 'react';
import './Task.css';

class Task extends React.Component {

    render() {
        return (
            <div className='task'>
                <input type="checkbox"/>
                <input type="text" value={this.props.value}/>
                <div className="buttons-container">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        );
    }
}

export default Task