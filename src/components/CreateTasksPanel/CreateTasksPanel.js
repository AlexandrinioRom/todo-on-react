import React from 'react'
import styles from './CreateTasksPanel.module.css'

class CreateTasksPanel extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' }
  }

  handleSubmit(event) {
    this.props.onClickCreate(this.state.value)
    this.setState({ value: '' })
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className={styles.header}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            placeholder="Create Task"
            onChange={this.handleChange}
            className={styles.input}
          />

          <button
            className={styles.button}
            type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default CreateTasksPanel
