import React from 'react'
import './FilterTasksPanel.css'

class FilterTaskPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checkedRadio: 'All' }
  }
  onChecked = (event) => {
    this.setState({ checkedRadio: event.target.id })
    this.props.filterState(event.target.id ?? this.state.checkedRadio)
  }
  render() {
    return (
      <div className="FilterTaskPanel">
        <label htmlFor="All">All</label>
        <input
          id="All"
          type="radio"
          name="filter"
          className="input"
          defaultChecked
          onChange={this.onChecked}
        />

        <label htmlFor="Active">Active</label>
        <input
          id="Active"
          type="radio"
          name="filter"
          className="input"
          onChange={this.onChecked}
        />

        <label htmlFor="Completed">Completed</label>
        <input
          id="Completed"
          type="radio"
          name="filter"
          className="input"
          onChange={this.onChecked}
        />
      </div>
    )
  }
}

export default FilterTaskPanel