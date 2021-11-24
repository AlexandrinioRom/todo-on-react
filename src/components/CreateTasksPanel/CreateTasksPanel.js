import React from 'react';
import './CreateTasksPanel.css'

class CreateTasksPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: ''};
        
    }

    
    
    handleSubmit(event) {
        this.props.onClickCreate(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div>
                <form
                    className='createTasksPanel'
                    onSubmit={this.handleSubmit}>

                        <input
                            type="text"
                            placeholder="Create Task"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />

                        <button type="submit">create</button>
                </form>
            </div>
        );
    }
}

export default CreateTasksPanel;