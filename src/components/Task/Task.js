import React from 'react';
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.value, completed: this.props.completed, disabled: true };
  }

  editTask = (event) => {
    event.target.blur();
    event.target.classList.toggle('hover');
    event.target.parentNode.previousElementSibling.classList.toggle('active');
    this.props.onClickEdit(this.props.id, this.state.task);
    this.setState({ disabled: !this.state.disabled });
  }

  onChange = (event) => {
    this.setState({ task: event.target.value });
  }

  completedTask = (event) => {
    event.target.nextElementSibling.classList.toggle('completed');
    this.props.onClickCompleted(this.props.id);
    this.setState({ completed: !this.state.completed });
  }

  deleteTask = () => {
    this.props.onClickDelete(this.props.id);
  }

  render() {
    return (
      <div className='task'>
        <input type="checkbox" onChange={this.completedTask} />
        <textarea
          className='task-textarea'
          type="text"
          placeholder={this.props.value}
          disabled={this.state.disabled}
          onChange={this.onChange}
        />

        <div className="buttons-container">
          <button onClick={this.editTask}>edit</button>
          <button onClick={this.deleteTask}>delete</button>
        </div>
      </div>
    );
  }
}

export default Task